import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportDataComponent } from './export-data.component';
import { ExportDataService } from './services/export-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExportDataComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    ExportDataComponent
  ],
  providers: [
    ExportDataService,
  ]
})
export class ExportDataModule { }
