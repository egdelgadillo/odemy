import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { ICourses } from '@odemy/shared';

@Injectable({
  providedIn: 'root',
})
export class CoursesService extends ApiService<ICourses> {
  serviceName = 'courses';
}
