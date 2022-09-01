import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'date-viewer'
})
export class DateViewerDirective {

  @Input() currentDate: Date = new Date();

  constructor() { }

}
