import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRouting } from './teachers.routing';
import { TeachersComponent } from './main/teachers.component';
import { TeachersDetailsComponent } from './details/teachers-details.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { DatatableModule } from 'src/app/shared/components/datatable/datatable.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeachersRouting,
    BreadcrumbModule,
    PageTitleModule,
    DatatableModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class TeachersModule { }
