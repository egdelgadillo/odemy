import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [CourseCardComponent],
  imports: [CommonModule],
  exports: [CourseCardComponent],
})
export class SharedModule {}
