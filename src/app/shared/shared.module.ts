import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { RepeatDirective } from '../directives/repeat.directive';

@NgModule({
  declarations: [CourseCardComponent, RepeatDirective],
  imports: [CommonModule],
  exports: [CourseCardComponent],
})
export class SharedModule {}
