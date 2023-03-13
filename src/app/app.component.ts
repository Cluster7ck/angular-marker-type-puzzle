import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';
import { DialogService } from './dialog.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'associated-type';

  constructor(
    private dialogService: DialogService,
  ) {}

  public onOpenDialog() {
    this.dialogService.open(MyDialogComponent, { data: { value: "asdasd" }})
      // This is the crux of the problem. How do we get nice type inferrence for the input data
      // and output result? Currently both are typed unknown
      .subscribe((result) => {
        console.log(result);
      });

    this.dialogService.openWithSchema(MyDialogComponent, { autoFocus:true, data: { value: "traveller" }})
      // This is the crux of the problem. How do we get nice type inferrence for the input data
      // and output result? Currently both are typed unknown
      .subscribe((result) => {
        console.log(result);
      });
  }
}
