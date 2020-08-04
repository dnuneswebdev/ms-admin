import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student.model';
import { Course } from 'src/app/shared/models/course.model';
import { UxService } from 'src/app/shared/services/ux.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  studentForm: FormGroup;
  courses: Course[];
  isEditing: boolean = false;
  isLoading: boolean = false;
  isSubmittingForm: boolean = false;
  studentId: number;
  routeParams: any;
  today: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private uxService: UxService,
  ) { }

  ngOnInit(): void {
    this.buildStudentForm();
    this.getAllCoursesForComboBox();

    if (this.checkIfIsEditing()) {
      this.getStudentData();
    } else {
    }
  }

  buildStudentForm() {
    this.studentForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000) + 6],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.maxLength(2)]],
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
    this.isLoading = true;

    this.studentsService.getStudent(this.studentId)
      .subscribe((student: Student) => {
        this.patchValueStudentForm(student)
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
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
    this.isSubmittingForm = true;
    this.studentsService.createNewStudent(student)
      .subscribe((response) => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/students']);
          this.studentForm.reset();
          this.uxService.success('Aluno cadastrado com sucesso!');
          this.isSubmittingForm = false;
        }, 500);
      }, error => {
        this.uxService.error('Houve um erro, tente novamente mais tarde...')
        this.isSubmittingForm = false;
        console.log(error);
      });
  }

  updateStudent(student: Student) {
    this.isSubmittingForm = true;
    this.studentsService.updateStudent(student.id, student)
      .subscribe((response) => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/students']);
          this.studentForm.reset();
          this.uxService.success('Aluno alterado com sucesso!');
          this.isSubmittingForm = false;
        }, 500);
      }, error => {
        this.uxService.error('Houve um erro, tente novamente mais tarde...')
        this.isSubmittingForm = false;
        console.log(error);
      })
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
