import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllTeachers() {
    return this.http.get(`${environment.api}/teachers`);
  }

  getTeacher(id: number) {
    return this.http.get(`${environment.api}/teachers/${id}`);
  }

  createNewTeacher(teacher: Teacher) {
    return this.http.post(`${environment.api}/teachers`, teacher);
  }

  updateTeacher(id: number, teacher: Teacher) {
    return this.http.put(`${environment.api}/teachers/${id}`, teacher);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${environment.api}/teachers/${id}`);
  }

  getAllRoles() {
    return this.http.get(`${environment.api}/roles`);
  }
}
