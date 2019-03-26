import {Component,
        Input,
        OnInit,
        ViewChild} from '@angular/core';
import {EThlonMenuItemType,
        ThlonMenuItem,
        ThlonMenuItem_Branch,
        ThlonMenuItem_Route,
        ThlonMenuItem_ServiceMethod} from './thlon-menu-item';

@Component({
  selector: 'thlon-menu',
  templateUrl: './thlon-menu.component.html',
  styleUrls: ['./thlon-menu.component.css']
})
export class ThlonMenuComponent {
  @Input() rootMenuItemList: ThlonMenuItem[];
  @ViewChild('contextMenu') public contextMenu;

  constructor() {}
}
