import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../services/teachers.service';
import { Teacher } from '../models/teacher.model';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UxService } from 'src/app/shared/services/ux.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[];

  constructor(
    private router: Router,
    private teachersService: TeachersService,
    private dialog: MatDialog,
    private uxService: UxService,
  ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teachersService.getAllTeachers()
      .subscribe((teachers: Teacher[]) => {
        teachers.forEach((teacher) => {
          teacher.date = new Date(teacher.date).toLocaleDateString('pt-BR');
        });

        this.teachers = teachers;
      });
  }

  addTeacher() {
    this.router.navigate(['/teachers/add']);
  }

  editTeacher(teacher) {
    this.router.navigate([`/teachers/edit/${teacher.id}`]);
  }

  deleteTeacher(teacher: Teacher) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: 'Tem certeza que deseja excluir este(a) professor(a)?'
      }
    });

    dialogRef.afterClosed()
      .subscribe((result) => {
        if (result) {
          this.teachersService.deleteTeacher(teacher.id)
            .subscribe((response) => {
              this.uxService.success('Professor deletado com sucesso!')
              this.getAllTeachers();
            }, error => {
              this.uxService.error('Houve um erro na sua solicitação...');
              console.log(error);
            })
        } else {
          return;
        }
      })
  }

}
