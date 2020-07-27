import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemSettingsRouting } from './system-settings.routing';
import { SystemSettingsComponent } from './system-settings.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';



@NgModule({
  declarations: [
    SystemSettingsComponent,
  ],
  imports: [
    CommonModule,
    SystemSettingsRouting,
    BreadcrumbModule,
    PageTitleModule,
  ]
})
export class SystemSettingsModule { }
