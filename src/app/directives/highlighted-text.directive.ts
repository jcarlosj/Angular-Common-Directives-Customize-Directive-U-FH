import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightedText]'
})
export class HighlightedTextDirective {

  constructor( private elParagraph : ElementRef ) { 
    console .log( 'Directiva appHighlightedText disponible!' );
  }

  @Input( 'appHighlightedText' ) newColor: string;

  /** Decorador que declara un evento DOM para escuchar
   * proporciona un método de controlador para ejecutarse cuando se produce ese evento */
  @HostListener( 'mouseenter' ) mEnter() {    // mEnter es un alias
    console .log( 'newColor', this .newColor );
    this .highlight( this .newColor || 'yellow' );
  }
  @HostListener( 'mouseleave' ) mLeave() {    // mLeave es un alias
    console .log( 'newColor', this .newColor );
    this .highlight( null );            // null se considera como un string valido
  }

  private highlight( color: string ) {
    this .elParagraph .nativeElement .style .backgroundColor = color;
  }

}
