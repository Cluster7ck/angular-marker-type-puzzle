import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface DialogComponent<TInput, TOuput> {}

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

  /******************
   * The idea here is that MyDialogComponent implements DialogComponent<boolean>.
   * It doesn't work though (I guess the structural type system throws away that information?!)
  public open<T extends DialogComponent<Data, Result>, Data, Result>(
    component: ComponentType<T>,
    config?: MatDialogConfig<Data>
  ): Observable<Result | undefined> {
    const matDialogRef = this.matDialog.open<T, Data, Result>(component, {
      ...config,
      autoFocus: true,
    });
    return matDialogRef.afterClosed();
  }
  */
}
