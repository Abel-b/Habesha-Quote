import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(2, 'Charles', 'I learnt how to learn', 'admin', new Date(2019, 3, 23)),
    new Quote(1, 'Moringa School', 'Code your problems!', 'admin', new Date(1990, 5, 10)),
    new Quote(3, 'Abel Berhane', 'Cheap is expensive', 'admin', new Date(2019, 8, 17)),

  ]

  showDescription= false;

    addNewQuote(quote) {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    
    deleteQuote(isComplete, index) {
      if(isComplete) {
        let toDelete = confirm(`Do you want to delete this quote? ${this.quotes[index].name}`)
        if(toDelete) {this.quotes.splice(index, 1)}
      }
    }

    toggleQuote() {
      this.showDescription = !this.showDescription;
    }
  ngOnInit() {
  }

}
