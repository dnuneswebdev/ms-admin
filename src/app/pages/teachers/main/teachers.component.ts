import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from '../services/teachers.service';
import { Teacher } from '../models/teacher.model';

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
  ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teachersService.getAllTeachers()
      .subscribe((teachers: Teacher[]) => {
        this.teachers = teachers;
      });
  }

  addTeacher() {
    this.router.navigate(['/teachers/add']);
  }

}
