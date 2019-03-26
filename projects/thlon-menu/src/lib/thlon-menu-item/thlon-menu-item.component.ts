import {Component,
        Input,
        OnInit,
        ViewChild,
        Injector} from '@angular/core';
import {Router} from '@angular/router';
import {EThlonMenuItemType,
        ThlonMenuItem,
        ThlonMenuItem_ServiceMethod} from '../thlon-menu-item';

@Component({
  selector: 'thlon-menu-item',
  templateUrl: './thlon-menu-item.component.html',
  styleUrls: ['./thlon-menu-item.component.css']
})
export class ThlonMenuItemComponent implements OnInit {
  @Input() menuItems: ThlonMenuItem[];
  @ViewChild('contextMenu') public contextMenu;
  EEThlonMenuItemType = EThlonMenuItemType;

  constructor(private injector:Injector,
              public router: Router) {
  }

  ngOnInit() {
  }

  callServiceMethod(event, menuItem: ThlonMenuItem_ServiceMethod){
    let service: any = this.injector.get(menuItem.serviceType);

    if (service && service[menuItem.methodName]) {
      service[menuItem.methodName].apply (service, menuItem.methodParameterArray);
    } else {
      if (!service) {
        console.error("service not found for type: " + menuItem.serviceType);
      } else {
        console.error("service " + service + " dont have method " + menuItem.methodName);
      }
    }
  }
}
