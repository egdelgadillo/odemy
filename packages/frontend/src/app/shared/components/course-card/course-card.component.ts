import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() imgUrl = '';
  @Input() title = '';
  @Input() instructor = '';
  @Input() score = 0;
  @Input() price = 0;
  @Input() isDiscount = false;

  ngOnInit(): void {}

  getFullStars(score: number) {
    return Math.floor(score);
  }

  addPercentage(price: number, percentage: number) {
    return Math.floor(price + (percentage / 100) * price);
  }
}
