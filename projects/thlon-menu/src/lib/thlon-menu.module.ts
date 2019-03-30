import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule,
        MatButtonModule,
        MatMenuModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {ThlonMenuComponent} from './thlon-menu.component';
import {ThlonMenuItemComponent} from './thlon-menu-item/thlon-menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
