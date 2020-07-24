import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRouting } from './teachers.routing';
import { TeachersComponent } from './main/teachers.component';
import { TeachersDetailsComponent } from './details/teachers-details.component';



@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeachersRouting
  ]
})
export class TeachersModule { }
