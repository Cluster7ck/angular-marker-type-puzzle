# The Problem

https://github.com/Cluster7ck/angular-marker-type-puzzle/blob/d8009861af6ef7314bd30aa42309b37f491ccf5b/src/app/app.component.ts#L18-L25

The type of `result` is inferred as `unknown`. This is unfortunate, because it means everytime you want to open the dialog with the correct inferred type you have to write:

```ts
    this.dialogService.open<MyDialogComponent, unknown, boolean>(MyDialogComponent, { autoFocus: true })
      .subscribe((result) => {
        console.log(result);
      });
```

This isn't just annoying, but also brittle because if the return type changes, it's not an
error.

# The Question

How can we change the type of `MyDialogComponent` (and/or `DialogService.open`) to correctly infer the generic types `Data` and `Result` of the `dialogService.open` function.

## Angular setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.