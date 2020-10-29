import { Injectable } from '@angular/core';
import { FakeDbService } from './fake-db.service';

@Injectable({
  providedIn: 'root',
})
export class FakeHttpClientService {
  constructor() {}

  public getCourses() {
    return FakeDbService.Courses;
  }
}
