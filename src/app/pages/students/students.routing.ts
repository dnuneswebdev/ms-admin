import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './main/students.component';
import { StudentsDetailsComponent } from './details/students-details.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'add', component: StudentsDetailsComponent },
  { path: 'edit/:id', component: StudentsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRouting { }
