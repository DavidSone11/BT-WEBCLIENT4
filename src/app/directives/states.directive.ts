
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStates]'
})
export class StatesDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
  }

}
