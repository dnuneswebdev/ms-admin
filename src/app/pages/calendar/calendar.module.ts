import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRouting } from './calendar.routing';
import { CalendarComponent } from './calendar.component';



@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarRouting,
  ]
})
export class CalendarModule { }
