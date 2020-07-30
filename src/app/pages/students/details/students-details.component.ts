import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student.model';
import { DatePipe } from '@angular/common';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  studentForm: FormGroup;
  courses: Course[];
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.buildStudentForm();
    this.getAllCoursesForComboBox();
  }

  buildStudentForm() {
    this.studentForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000) + 6],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [0, Validators.required],
      course: [null, Validators.required],
      date: ['', Validators.required],
      status: [true],
    });
  }

  submitStudentForm(studentFormValue) {
    const student = {
      id: studentFormValue.id,
      name: studentFormValue.name,
      email: studentFormValue.email,
      age: studentFormValue.age,
      course: studentFormValue.course,
      date: studentFormValue.date,
      status: studentFormValue.status,
    }

    student.date = this.datePipe.transform(student.date, 'dd/MM/yyyy');

    this.studentsService.createNewStudent(student)
      .subscribe((response) => console.log('foi', response))

    console.log(student);
  }

  cancelForm() {
    this.studentForm.reset();
    this.router.navigate(['/students']);
  }

  getAllCoursesForComboBox() {
    this.studentsService.getAllCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      }, error => {
        console.log(error);
      });
  }

}
