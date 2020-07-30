import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  createNewStudent(student) {
    return this.http.post(`${environment.api}/students`, student);
  }

  getAllCourses() {
    return this.http.get(`${environment.api}/courses`);
  }

}
