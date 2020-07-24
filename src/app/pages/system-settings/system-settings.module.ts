import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemSettingsRouting } from './system-settings.routing';
import { SystemSettingsComponent } from './system-settings.component';



@NgModule({
  declarations: [
    SystemSettingsComponent,
  ],
  imports: [
    CommonModule,
    SystemSettingsRouting,
  ]
})
export class SystemSettingsModule { }
