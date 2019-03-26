import {Component,
        Inject,
        OnInit} from '@angular/core';
import {MatDialogRef,
        MAT_DIALOG_DATA} from '@angular/material';
import {ThlonGroupService} from '../thlon-group.service';
import {ThlonGroupDialogData} from '../thlon-data';

@Component({
  selector: 'thlon-group-dialog-rename',
  templateUrl: './thlon-group-dialog-rename.component.html',
  styleUrls: ['./thlon-group-dialog-rename.component.css']
})
export class ThlonGroupDialogRenameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ThlonGroupDialogRenameComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ThlonGroupDialogData,
              private thlonGroupService: ThlonGroupService) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCloseClick(): void {
    this.thlonGroupService.updateGroup (this.data.thlonGroup);
    this.dialogRef.close();
  }
}
