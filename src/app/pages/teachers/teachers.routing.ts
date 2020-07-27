import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './main/teachers.component';
import { TeachersDetailsComponent } from './details/teachers-details.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'add', component: TeachersDetailsComponent },
  { path: 'edit/:id', component: TeachersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRouting { }
