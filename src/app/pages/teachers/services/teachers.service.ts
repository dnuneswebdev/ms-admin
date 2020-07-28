import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}
