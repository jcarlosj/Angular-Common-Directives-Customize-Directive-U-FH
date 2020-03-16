import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library .add( faAngular );
  }
}
