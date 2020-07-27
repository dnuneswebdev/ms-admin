//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { StudentsRouting } from './students.routing';
import { StudentsComponent } from './main/students.component';
import { StudentsDetailsComponent } from './details/students-details.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { DatatableModule } from 'src/app/shared/components/datatable/datatable.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


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
    DatatableModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class StudentsModule { }
