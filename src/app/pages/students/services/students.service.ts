import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents() {
    return this.http.get(`${environment.api}/students`);
  }

  getStudent(id: number) {
    return this.http.get(`${environment.api}/students/${id}`);
  }

  createNewStudent(student: Student) {
    return this.http.post(`${environment.api}/students`, student);
  }

  updateStudent(id: number, student: Student) {
    return this.http.put(`${environment.api}/students/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${environment.api}/students/${id}`);
  }

  getAllCourses() {
    return this.http.get(`${environment.api}/courses`);
  }

}
