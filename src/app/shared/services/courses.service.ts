import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { ICourses } from '../models/ICourses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService extends ApiService<ICourses> {
  serviceName = 'courses';
}
