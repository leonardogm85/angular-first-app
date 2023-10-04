import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  getCourses(): string[] {
    return [ 'Angular', 'React', 'Vue' ];
  }

}
