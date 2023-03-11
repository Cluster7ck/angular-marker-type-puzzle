import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    this.dialogService.open(MyDialogComponent, { autoFocus: true })
      .subscribe((result) => {
        console.log(result);
      });
  }
}
