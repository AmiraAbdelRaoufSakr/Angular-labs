import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _htttp: HttpClient) { }

  getCourses(){
    return this._htttp.get(`${environment.baseUrl}/courses`);
  }

  getCourseById(id){
    return this._htttp.get(`${environment.baseUrl}/courses/${id}`);
  }
}
