//ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//MATERIAL
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

//COMPONENT
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
