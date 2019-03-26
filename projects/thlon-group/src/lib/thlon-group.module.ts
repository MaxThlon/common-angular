import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TranslateModule} from '@ngx-translate/core';
import {RxStompService} from '@stomp/ng2-stompjs';
import {ThlonMenuModule} from 'thlon-menu';
import {ThlonGroupComponent} from './thlon-group.component';
import {ThlonGroupDialogRenameComponent} from './thlon-group-dialog-rename/thlon-group-dialog-rename.component';

@NgModule({
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    TranslateModule,
    ThlonMenuModule
  ],
  declarations: [
    ThlonGroupComponent,
    ThlonGroupDialogRenameComponent
  ],
  providers: [
    RxStompService
  ],
  exports: [ThlonGroupComponent],
  entryComponents: [ThlonGroupDialogRenameComponent]
})
export class ThlonGroupModule { }
