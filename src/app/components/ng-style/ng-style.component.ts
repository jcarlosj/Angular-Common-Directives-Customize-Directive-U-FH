import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  styleAuthor = { 'font-weight': 'bold', 'font-size': '.6rem' };
  stylePhrase = { 'font-size': '1.2rem' };
  fontSizePhrase = 1.2;
  fontSizeAuthor = .8;
  fontWeightAuthor = 'bold';
  increasesSize = 12;

  constructor() { }

  ngOnInit() {
  }

}
