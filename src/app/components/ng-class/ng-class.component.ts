import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  classAlert: string = "alert-primary";    // String con nombre de una clase CSS disponible

  classProperties: Object = {           // Objeto con clases condicionadas
    'text-center': false,
    'border-bottom': true,
    'border-warning': true,
    'text-warning': true,
    'pb-2': true
  };

  conditionalClasses: Object = {           // Objeto con propiedades que condicionan
    uppercase: true,
    background: true,
    center: true
  };

  prop: Object = {
    isAuthorized: false
  }

  loading: boolean = false;

  constructor() { 
    console .log( 'Loading!', this .loading );
  }

  ngOnInit() {
  }

  execute() {
    this .loading = true;
    console .log( 'Loading!', this .loading );

    setTimeout( () => {
      this .loading = false;
      console .log( 'Loading!', this .loading );
    }, 3000 );
  }

}
