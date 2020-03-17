import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ComponentStylesComponent } from './components/component-styles/component-styles.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { HighlightedTextDirective } from './directives/highlighted-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ComponentStylesComponent,
    NgClassComponent,
    HighlightedTextDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( public library: FaIconLibrary ) {
    library .addIconPacks( fas );       // Referencia paquetes de iconos
    library .addIcons( faAngular );     // Referencia iconos]
  }
}
