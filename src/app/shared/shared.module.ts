import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { RepeatDirective } from '../directives/repeat.directive';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  declarations: [CourseCardComponent, RepeatDirective, CourseListItemComponent],
  imports: [CommonModule],
  exports: [CourseCardComponent, CourseListItemComponent],
})
export class SharedModule {}
