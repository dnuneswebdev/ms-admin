import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent,
  ]
})
export class DialogModule { }