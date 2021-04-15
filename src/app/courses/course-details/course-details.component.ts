import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { Course } from 'src/app/course.model';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {

  
   private _routeParamsSub: Subscription;
   course: Course;
  constructor(private _route: ActivatedRoute,
    private _coursesService: CoursesService) { }

  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if(paramMap.has('id')){
        this. _coursesService.getCourseById(paramMap.get('id')).subscribe((res: any) => {
          //console.log(res);
          this.course = res.data;
      });
   
  }
});
  }
  ngOnDestroy(): void{
    this._routeParamsSub.unsubscribe();
  }

}
