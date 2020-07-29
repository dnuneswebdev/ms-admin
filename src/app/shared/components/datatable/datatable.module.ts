//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Component
import { DatatableComponent } from './datatable.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
