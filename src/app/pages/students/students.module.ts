//Angular
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

//Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Components
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { DatatableModule } from 'src/app/shared/components/datatable/datatable.module';
import { StudentsRouting } from './students.routing';
import { StudentsComponent } from './main/students.component';
import { StudentsDetailsComponent } from './details/students-details.component';
import { StudentsService } from './services/students.service';
import { ExportDataModule } from 'src/app/shared/components/export-data/export-data.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    StudentsRouting,
    ReactiveFormsModule,
    BreadcrumbModule,
    PageTitleModule,
    DatatableModule,
    ExportDataModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    StudentsService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class StudentsModule { }
