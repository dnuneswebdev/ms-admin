import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRouting } from './teachers.routing';
import { TeachersComponent } from './main/teachers.component';
import { TeachersDetailsComponent } from './details/teachers-details.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';



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
  ]
})
export class TeachersModule { }
