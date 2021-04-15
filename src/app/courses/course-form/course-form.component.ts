import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  errors = [];
  courseForm: FormGroup = this._fb.group({
    title: ['',Validators.required],
    instructor: ['',Validators.required],
    isFree: [false]
  });
  constructor(
    private _fb: FormBuilder,
    private _coursesService: CoursesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: FormGroup) {
    if(form.valid) {
      const course = form.value;
      this._coursesService.addCourse(course).subscribe(
        (res: any) => {
          this._router.navigate(['courses', res.data.id]);
        },
        (err: any) => {
          this.errors = err.error.error || [];
          
        }
      )
    }
  }

}
