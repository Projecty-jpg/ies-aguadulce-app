import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './courses.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('assets/data/courses.json');
  }

  getCourse(id: number): Observable<Course> {
    return this.getCourses().pipe(map(res => {
      return res.find(item => item.id === id);
    }));
  }
}
