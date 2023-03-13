import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog.service';

@Component({
  selector: 'app-dialog-two',
  templateUrl: './dialog-two.component.html',
  styleUrls: ['./dialog-two.component.css']
})
export class DialogTwoComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogTwoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<DialogTwoComponent>
    ) {}
}
