import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input('appRepeat') set render(repeat: number) {
    this.viewContainer.clear();

    for (let i = 0; i < repeat; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
