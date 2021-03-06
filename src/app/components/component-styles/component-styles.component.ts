import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-styles',
  templateUrl: './component-styles.component.html',
  styles: [
    'h3 { color: orange; text-align: center }',
    'small { font-size: .8rem; }',
    `
      p {
        font-size: 1.2rem;
      }
      small {
        color: green;
        text-transform: uppercase;
      }
      button {
        background-color: blue;
        border: none;
        color: white;
        font-weight: bold;
        padding: .5rem 1rem;
      }

      /** selector de pseudo-clase :host 
       * Afecta estilos en el elemento que aloja el componente */
      :host {
        border: 1px dotted green;
        display: block;
        padding: 1rem;
      }
      :host(.active) {
        background-color: lightgoldenrodyellow;
      }
      :host(.active) button {
        background-color: red;
      }
      /** Funciona igual que :host 
       * Es útil aplicar estilos basados ​​en alguna condición fuera de la vista de un componente.
       */
      :host-context(.theme-light) {
        background-color: #f8f9fa;
      }
      :host-context(.theme-light) h3 {
        color: red;
        text-decoration: underline;
      }
    `
  ]
})
export class ComponentStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
