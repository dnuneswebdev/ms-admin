import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    BreadcrumbModule,
    PageTitleModule,
  ]
})
export class DashboardModule { }
