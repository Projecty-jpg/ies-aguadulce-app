import { Component, OnInit } from '@angular/core';
import { Course } from '../../courses.models';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.coursesService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

}
