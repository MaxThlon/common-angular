import {Component,
        OnInit,
        ChangeDetectionStrategy} from '@angular/core';
import {MatDialog} from '@angular/material';
import {RxStompService} from '@stomp/ng2-stompjs';
import {EThlonMenuItemType,
        ThlonMenuItemList} from 'thlon-menu';
import {ThlonGroup} from './thlon-group';
import {ThlonGroupService} from './thlon-group.service';
import {ThlonGroupDataSource} from './thlon-group.datasource';
import {ThlonGroupDialogRenameComponent} from './thlon-group-dialog-rename/thlon-group-dialog-rename.component';

@Component({
  selector: 'thlon-group',
  templateUrl: './thlon-group.component.html',
  styleUrls: ['./thlon-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThlonGroupComponent implements OnInit {
  thlonGroupDataSource: ThlonGroupDataSource;
  selectedThlonGroup: ThlonGroup = null;
  menuItemList: ThlonMenuItemList;

  constructor(private rxStompService: RxStompService,
              private thlonGroupService: ThlonGroupService) {
    this.thlonGroupDataSource = new ThlonGroupDataSource(rxStompService);
  }

  ngOnInit() {
  }

  /*websocket(event, elem) {
    let groupsCreateCommand: GroupsCommand = new GroupsCommand ();
    groupsCreateCommand.eGroupsCommand = EGroupsCommands.CREATE;
    groupsCreateCommand.name = "New group";

    this.rxStompService.publish({destination: "/app/groups",
                                 body: JSON.stringify(groupsCreateCommand)});
    //this.thlonGroupList$ = this.thlonGroupService.getThlonGroups();
  }*/

  onquerymenu() {
    this.rxStompService.publish({destination: "/app/groups"});
  }

  onSelect(thlonGroup: ThlonGroup): void {
    this.selectedThlonGroup = thlonGroup;
    this.menuItemList = this.generateMenuItemList();
  }

  generateMenuItemList () {
    let menuItemList: ThlonMenuItemList;
    if (this.selectedThlonGroup) {
      menuItemList = [
        {
          menuItemType: EThlonMenuItemType.ServiceMethod,
          translation: "Rename",
          iconName: "create_new_folder",
          serviceType: MatDialog,
          methodName: "open",
          methodParameterArray: [ThlonGroupDialogRenameComponent,
                                 {width: '250px',
                                  data: {group: this.selectedThlonGroup}}]
        },
        {
          menuItemType: EThlonMenuItemType.ServiceMethod,
          translation: "NewGroup",
          iconName: "create_new_folder",
          serviceType: MatDialog,
          methodName: "open",
          methodParameterArray: [ThlonGroupDialogRenameComponent,
                                 {width: '250px',
                                  data: {titleTranslation: "NewGroup", name: ''}}]
        }
      ];
    }

    return menuItemList;
  }
}
