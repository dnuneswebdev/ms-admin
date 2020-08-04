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

//Component
import { TeachersRouting } from './teachers.routing';
import { TeachersComponent } from './main/teachers.component';
import { TeachersDetailsComponent } from './details/teachers-details.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { DatatableModule } from 'src/app/shared/components/datatable/datatable.module';
import { TeachersService } from './services/teachers.service';
import { ExportDataModule } from 'src/app/shared/components/export-data/export-data.module';


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeachersRouting,
    ReactiveFormsModule,
    FlexLayoutModule,
    BreadcrumbModule,
    PageTitleModule,
    DatatableModule,
    ExportDataModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    TeachersService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class TeachersModule { }
