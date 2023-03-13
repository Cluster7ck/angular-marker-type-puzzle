import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { z, ZodTypeAny } from 'zod';

export type DialogComponent<TData, TResult> = {
    __brandData: TData,
    __brandResult: TResult,
}

export type DialogComponentSchema<TData extends ZodTypeAny, TResult extends ZodTypeAny> = {
    __brandDataSchema: TData,
    __brandResultSchema: TResult,
}

export type DialogResult<Type> = Type extends DialogComponent<infer _, infer R> ? R : never;
export type DialogData<Type> = Type extends DialogComponent<infer T, infer _> ? T : never;

export type DialogResultInferred<Type> = z.infer<Type extends DialogComponentSchema<infer _, infer R extends ZodTypeAny> ? R : never>;
export type DialogDataInferred<Type> = z.infer<Type extends DialogComponentSchema<infer D extends ZodTypeAny, infer _> ? D : never>;


@Injectable({
    providedIn: 'any',
})
export class DialogService {
    constructor(private matDialog: MatDialog) { }

    public open<T extends DialogComponent<D, R>, D = DialogData<T>, R = DialogResult<T>>(
        component: ComponentType<T>,
        config?: MatDialogConfig<DialogData<T>>
    ): Observable<DialogResult<T> | undefined> {
        const matDialogRef = this.matDialog.open<T, DialogData<T>, DialogResult<T>>(component, {
            ...config,
            autoFocus: true,
        });
        return matDialogRef.afterClosed();
    }

    public openWithSchema<T>(
        component: ComponentType<T>,
        config?: MatDialogConfig<DialogDataInferred<T>>
    ): Observable<DialogResultInferred<T>> {
        const matDialogRef = this.matDialog.open<T, DialogDataInferred<T>, DialogResultInferred<T>>(component, {
            ...config,
            autoFocus: true
        });
        return matDialogRef.afterClosed();
    }
}
