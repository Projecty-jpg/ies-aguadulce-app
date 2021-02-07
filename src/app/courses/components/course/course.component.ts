import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../courses.models';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: Course;

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getRoute(Number(params.id));
    });
  }

  private getRoute(id: number): void {
    this.coursesService.getCourse(id).subscribe(res => {
      this.course = res;
    });
  }

}
