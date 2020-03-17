import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]'
})
export class HighlightedTextDirective {

  constructor( private elParagraph : ElementRef ) { 
    console .log( 'Directiva appHighlightedText disponible!' );

    elParagraph .nativeElement .style .backgroundColor = 'yellow';
  }

}
