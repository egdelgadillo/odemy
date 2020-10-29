import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from '../mocks/fake-http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  courses = [];

  constructor(private fakeHttpClient: FakeHttpClientService) {}

  async ngOnInit(): Promise<void> {
    this.courses = await this.fakeHttpClient.getCourses();
  }
}
