import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import {Course } from  '../../course.model'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];
  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
   this._coursesService.getCourses().subscribe((res: any) => {
    //console.log(res);
    this.courses = res.data;
    });
  }

}
