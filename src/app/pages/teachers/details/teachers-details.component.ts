import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/shared/models/role.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UxService } from 'src/app/shared/services/ux.service';
import { TeachersService } from '../services/teachers.service';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: 'app-teachers-details',
  templateUrl: './teachers-details.component.html',
  styleUrls: ['./teachers-details.component.css']
})
export class TeachersDetailsComponent implements OnInit {

  teacherForm: FormGroup;
  roles: Role[];
  isEditing: boolean = false;
  isLoading: boolean = false;
  isSubmittingForm: boolean = false;
  teacherId: number;
  routeParams: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private uxService: UxService,
  ) { }

  ngOnInit(): void {
    this.buildTeacherForm();
    this.getAllRolesForComboBox();

    if (this.checkIfIsEditing()) {
      this.getTeacherData();
    } else {
    }
  }

  buildTeacherForm() {
    this.teacherForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000) + 6],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.maxLength(2)]],
      role: [null, Validators.required],
      date: ['', Validators.required],
    });
  }

  checkIfIsEditing(): boolean {
    this.route.url.subscribe((route) => {
      this.routeParams = route;
    });

    if (this.routeParams[0].path === 'edit') {
      this.teacherId = parseInt(this.routeParams[1].path);
      this.isEditing = true;
      return true;
    } else {
      return false;
    }

  }

  getTeacherData() {
    this.isLoading = true;

    this.teachersService.getTeacher(this.teacherId)
      .subscribe((teacher: Teacher) => {
        this.patchValueTeacherForm(teacher)
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }, error => {
        console.log(error);
      });
  }

  patchValueTeacherForm(teacher: Teacher) {
    this.teacherForm.patchValue({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      age: teacher.age,
      role: teacher.role,
      date: new Date(teacher.date),
    });
  }

  submitTeacherForm(teacherFormValue) {
    const teacher: Teacher = {
      id: teacherFormValue.id,
      name: teacherFormValue.name,
      email: teacherFormValue.email,
      age: teacherFormValue.age,
      role: teacherFormValue.role,
      date: teacherFormValue.date,
    }

    if (this.isEditing) {
      this.updateTeacher(teacher);
    } else {
      this.createTeacher(teacher);
    }

  }

  createTeacher(teacher: Teacher) {
    this.isSubmittingForm = true;
    this.teachersService.createNewTeacher(teacher)
      .subscribe((response) => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/teachers']);
          this.teacherForm.reset();
          this.uxService.success('Professor cadastrado com sucesso!');
          this.isSubmittingForm = false;
        }, 500);
      }, error => {
        this.uxService.error('Houve um erro, tente novamente mais tarde...')
        this.isSubmittingForm = false;
        console.log(error);
      });
  }

  updateTeacher(teacher: Teacher) {
    this.isSubmittingForm = true;
    this.teachersService.updateTeacher(teacher.id, teacher)
      .subscribe((response) => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/teachers']);
          this.teacherForm.reset();
          this.uxService.success('Professor alterado com sucesso!');
          this.isSubmittingForm = false;
        }, 500);
      }, error => {
        this.uxService.error('Houve um erro, tente novamente mais tarde...')
        this.isSubmittingForm = false;
        console.log(error);
      })
  }

  cancelForm() {
    this.teacherForm.reset();
    this.router.navigate(['/teachers']);
  }

  getAllRolesForComboBox() {
    this.teachersService.getAllRoles()
      .subscribe((roles: Role[]) => {
        this.roles = roles;
      }, error => {
        console.log(error);
      });
  }
}
