import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]'
})
export class HighlightedTextDirective {

  constructor( private elParagraph : ElementRef ) { 
    console .log( 'Directiva appHighlightedText disponible!' );
  }

  /** Decorador que declara un evento DOM para escuchar
   * proporciona un método de controlador para ejecutarse cuando se produce ese evento */
  @HostListener( 'mouseenter' ) mEnter() {    // mEnter es un alias
    this .elParagraph .nativeElement .style .backgroundColor = 'yellow';
  }
  @HostListener( 'mouseleave' ) mLeave() {    // mLeave es un alias
    this .elParagraph .nativeElement .style .backgroundColor = null;
  }

}
