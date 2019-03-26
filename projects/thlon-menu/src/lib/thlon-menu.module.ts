import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,
        MatButtonModule,
        MatMenuModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {ThlonMenuComponent} from './thlon-menu.component';
import {ThlonMenuItemComponent} from './thlon-menu-item/thlon-menu-item.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule,
  ],
  declarations: [
    ThlonMenuComponent,
    ThlonMenuItemComponent
  ],
  exports: [
    ThlonMenuComponent]
})
export class ThlonMenuModule { }
