import {CollectionViewer,
        DataSource} from '@angular/cdk/collections';
import {Observable,
        BehaviorSubject,
        Subscription} from 'rxjs';
import {Message} from '@stomp/stompjs';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Pageable} from './pageable';
import {ThlonGroup} from './thlon-group';
import {ThlonGroupService} from './thlon-group.service';

export class ThlonGroupDataSource extends DataSource<ThlonGroup> {
  private length = 100000;
  private pageSize = 100;
  //private cachedData = Array.from<string>({length: this.length});
  private thlonGroupList: ThlonGroup[] = Array.from<ThlonGroup>({length: 0});
  private pageable: Pageable;
  //private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<ThlonGroup[]>(this.thlonGroupList);
  private topicSubscription: Subscription;
  private subscription = new Subscription();

  constructor(private rxStompService: RxStompService) {
    super ();
  }

  connect(collectionViewer: CollectionViewer): Observable<ThlonGroup[]> {
    this.topicSubscription = this.rxStompService.watch('/user/queue/thlongroups.updates').subscribe((message: Message) => {
      if (message.body) {
        console.log("got message with body " + message.body);
      } else {
        console.log("got empty message");
      }

      const jsonBody = JSON.parse(message.body);

      for (let group of jsonBody["content"]) {
          this.thlonGroupList.push (<ThlonGroup>group);
      }
      this.pageable = <Pageable>jsonBody["pageable"];

      this.dataStream.next(this.thlonGroupList);
    });

    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      //const startPage = this.getPageForIndex(range.start);
      //const endPage = this.getPageForIndex(range.end - 1);

      console.log("subscription viewChange " + range.start + " " + range.end);
      //this.rxStompService.publish({destination: "/app/groups"});

    }));

    this.rxStompService.publish({destination: "/app/groups"});

    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
    this.topicSubscription.unsubscribe();
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }
/*
  private fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    let groupsCreateCommand: GroupsCommand = new GroupsCommand ();
    groupsCreateCommand.eGroupsCommand = EGroupsCommands.CREATE;
    groupsCreateCommand.name = "New group";

    this.rxStompService.publish({destination: "/app/groups",
                                 body: JSON.stringify(groupsCreateCommand)});

    // Use `setTimeout` to simulate fetching data from server.
    setTimeout(() => {
      this.cachedData.splice(page * this.pageSize, this.pageSize,
          ...Array.from({length: this.pageSize})
              .map((_, i) => `Item #${page * this.pageSize + i}`));
      this.dataStream.next(this.cachedData);
    }, Math.random() * 1000 + 200);
  }*/
}
