
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[States]'
})
export class StatesDirective {

  // constructor(Element: ElementRef) {

  //   Element.nativeElement.innerText = "Text is changed by changeText Directive. ";
  //   Element.nativeElement.style.color = "blue";

  // }

  constructor(elem: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(elem.nativeElement, 'color', '#ff5562');
  }
}
