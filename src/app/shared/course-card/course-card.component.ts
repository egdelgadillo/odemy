import { Component, Input, OnInit } from '@angular/core';
import { FakeHttpClientService } from '../../mocks/fake-http-client.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
})
export class CourseCardComponent implements OnInit {
  @Input() imgUrl = '';
  @Input() title = '';
  @Input() instructor = '';
  @Input() score = 0;
  @Input() price = 0;
  @Input() isDiscount = false;

  constructor(private fakeHttpClient: FakeHttpClientService) {}

  ngOnInit(): void {}

  getFullStars(score: number) {
    return Math.floor(score);
  }

  addPercentage(price: number, percentage: number) {
    return Math.floor(price + (percentage / 100) * price);
  }
}
