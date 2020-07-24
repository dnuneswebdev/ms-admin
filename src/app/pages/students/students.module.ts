import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRouting } from './students.routing';
import { StudentsComponent } from './main/students.component';
import { StudentsDetailsComponent } from './details/students-details.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRouting,
  ]
})
export class StudentsModule { }
