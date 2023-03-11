import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}

  public open<T, Data, Result>(
    component: ComponentType<T>,
    config?: MatDialogConfig<Data>
  ): Observable<Result | undefined> {
    const matDialogRef = this.matDialog.open<T, Data, Result>(component, {
      ...config,
      autoFocus: true,
    });
    return matDialogRef.afterClosed();
  }
}
