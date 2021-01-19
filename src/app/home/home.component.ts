import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses = [];

  constructor(private coursesService: CoursesService) {
    console.log('aqui');
  }

  async ngOnInit(): Promise<void> {
    this.courses = await this.coursesService.getAll();
  }
}
