import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { UxService } from 'src/app/shared/services/ux.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(
    private router: Router,
    private studentsService: StudentsService,
    private dialog: MatDialog,
    private uxService: UxService,
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentsService.getAllStudents()
      .subscribe((students: Student[]) => {
        this.students = students;
      })
  }

  addStudent() {
    this.router.navigate(['/students/add']);
  }

  editStudent(student) {
    this.router.navigate([`/students/edit/${student.id}`]);
  }

  deleteStudent(student: Student) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: 'Tem certeza que deseja excluir este(a) aluno(a)?'
      }
    });

    dialogRef.afterClosed()
      .subscribe((result) => {
        if (result) {
          this.studentsService.deleteStudent(student.id)
            .subscribe((response) => {
              this.uxService.success('Aluno deletado com sucesso!')
              this.getAllStudents();
            }, error => {
              this.uxService.error('Houve um erro na sua solicitação...');
              console.log(error);
            })
        } else {
          return;
        }
      })
  }

  changeStudentStatus(item: any) {
    item.element.status = item.status;

    this.studentsService.updateStudent(item.element.id, item.element)
      .subscribe((response) => {
        this.uxService.success(`O Status do aluno(a) ${item.element.name} foi alterado com sucesso!`);
      }, error => {
        this.uxService.error('Não foi possivel alterar o status do aluno(a)');
        console.log(error);
      });
  }

}
