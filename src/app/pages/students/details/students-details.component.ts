import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  studentId: number;
  routeParams: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.buildStudentForm();
    this.getAllCoursesForComboBox();

    if (this.checkIfIsEditing()) {
      this.getStudentData();
    }

  }

  buildStudentForm() {
    this.studentForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000) + 6],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, Validators.required],
      course: [null, Validators.required],
      date: ['', Validators.required],
      status: [true],
    });
  }

  checkIfIsEditing(): boolean {
    this.route.url.subscribe((route) => {
      this.routeParams = route;
    });

    if (this.routeParams[0].path === 'edit') {
      this.studentId = parseInt(this.routeParams[1].path);
      this.isEditing = true;
      return true;
    } else {
      return false;
    }

  }

  getStudentData() {
    this.studentsService.getStudent(this.studentId)
      .subscribe((student: Student) => {
        this.patchValueStudentForm(student)
      }, error => {
        console.log(error);
      });
  }

  patchValueStudentForm(student: Student) {
    this.studentForm.patchValue({
      id: student.id,
      name: student.name,
      email: student.email,
      age: student.age,
      course: student.course,
      date: new Date(student.date),
      status: student.status,
    });
  }

  submitStudentForm(studentFormValue) {
    const student: Student = {
      id: studentFormValue.id,
      name: studentFormValue.name,
      email: studentFormValue.email,
      age: studentFormValue.age,
      course: studentFormValue.course,
      date: studentFormValue.date,
      status: studentFormValue.status,
    }

    if (this.isEditing) {
      this.updateStudent(student);
    } else {
      this.createStudent(student);
    }

  }

  createStudent(student: Student) {
    this.studentsService.createNewStudent(student)
      .subscribe((response) => console.log('criado' + student.name));
  }

  updateStudent(student: Student) {
    this.studentsService.updateStudent(student.id, student)
      .subscribe((response) => console.log('alterado' + student.name))
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
