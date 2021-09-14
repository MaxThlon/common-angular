import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RxStompService} from '@stomp/ng2-stompjs';
import {ThlonGroup} from './thlon-group';
import {ThlonDataType,
        ThlonData} from './thlon-data';

@Injectable({
  providedIn: 'root'
})
export class ThlonGroupService {
  constructor(private rxStompService: RxStompService) { }
  createGroup(){}
  updateGroup(thlonGroup: ThlonGroup){
    
  }
}
