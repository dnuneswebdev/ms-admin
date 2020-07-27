import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    PageTitleComponent
  ]
})
export class PageTitleModule { }
