import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
