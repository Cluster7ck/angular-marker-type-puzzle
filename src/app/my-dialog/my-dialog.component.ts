import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, DialogResult } from '../dialog.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  __brandData: { value: string} = { value: ""};
  __brandResult: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<MyDialogComponent>
    ) {}

  public onClick(value: DialogResult<MyDialogComponent>) {
    this.dialogRef.close(value);
  }
}
