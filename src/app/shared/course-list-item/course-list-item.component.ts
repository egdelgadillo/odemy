import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.sass'],
})
export class CourseListItemComponent implements OnInit {
  @Input() imgUrl = '';
  @Input() title = '';
  @Input() description = '';
  @Input() instructor = '';
  @Input() score = 0;
  @Input() price = 0;
  @Input() isDiscount = false;

  constructor() {}

  ngOnInit(): void {}

  getFullStars(score: number) {
    return Math.floor(score);
  }

  addPercentage(price: number, percentage: number) {
    return Math.floor(price + (percentage / 100) * price);
  }
}
