import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRouting } from './students.routing';
import { StudentsComponent } from './main/students.component';
import { StudentsDetailsComponent } from './details/students-details.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRouting,
    BreadcrumbModule,
    PageTitleModule,
  ]
})
export class StudentsModule { }
