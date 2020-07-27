import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRouting } from './calendar.routing';
import { CalendarComponent } from './calendar.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';



@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarRouting,
    BreadcrumbModule,
    PageTitleModule,
  ]
})
export class CalendarModule { }
