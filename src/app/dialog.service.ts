import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export type DialogComponent<TData, TResult> = {
  __brandData: TData,
  __brandResult: TResult,
}

export type DialogResult<Type> = Type extends DialogComponent<infer _, infer R> ? R : never;
export type DialogData<Type> = Type extends DialogComponent<infer T, infer _> ? T : never;
type InternalData<T> = MatDialogConfig<DialogData<T>>;

@Injectable({
  providedIn: 'any',
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}

  public open<T>(
    component: ComponentType<T>,
    config?: InternalData<T>
  ): Observable<DialogResult<T> | undefined> {
    const matDialogRef = this.matDialog.open<T, DialogData<T>, DialogResult<T>>(component, {
      ...config,
      autoFocus: true,
    });
    return matDialogRef.afterClosed();
  }
}
