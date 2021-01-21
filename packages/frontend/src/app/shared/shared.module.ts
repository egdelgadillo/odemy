import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListItemComponent } from './components/course-list-item/course-list-item.component';

// Directives
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [CourseCardComponent, RepeatDirective, CourseListItemComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CourseCardComponent, CourseListItemComponent],
})
export class SharedModule {}
