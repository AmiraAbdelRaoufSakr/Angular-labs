import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.classList.add('alert', 'alert-warning');
   }

}
