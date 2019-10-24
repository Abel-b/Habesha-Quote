import { Component, OnInit } from '@angular/core';
import { Quote } from '../qoute';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Moringa School', 'Code your problems!', 'admin', new Date(1990, 5, 10)),
    new Quote(2, 'Charles', 'I learnt how to learn', 'admin', new Date(1950, 3, 23)),
    new Quote(3, 'Abel Berhane', 'Cheap is expensive', 'admin', new Date(2012, 8, 17)),

  ]

  showDescription= false;

  constructor() { }

  ngOnInit() {
  }

}
