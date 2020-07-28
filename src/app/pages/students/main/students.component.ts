import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student.model';

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

}
