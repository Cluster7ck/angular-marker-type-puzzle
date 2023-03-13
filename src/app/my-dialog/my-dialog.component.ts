import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent, DialogData, DialogDataInferred, DialogResult } from '../dialog.service';
import { z } from "zod"

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  __brandDataSchema = z.object({ value: z.string() });
  __brandResultSchema = z.boolean().optional();
  __brandData: { value: string} = { value: ""};
  __brandResult: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataInferred<MyDialogComponent>
    ) {}

  public onClick(value: DialogResult<MyDialogComponent>) {
    this.dialogRef.close(value);
  }
}
