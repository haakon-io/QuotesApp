import { Injectable } from '@angular/core';
// You will need to add the values below to compiler options in the tsconfig.json to import json files as a module
// "resolveJsonModule": true,"esModuleInterop": true
import quoteJson from '../../common/data/quotes.json';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor() { }

  quotes = quoteJson;
  content = this.quotes[0].quote;
  author = this.quotes[0].author;
  quote = { author : 'Loading...', content : 'Lorem Ipsum Dolore' };
  randomQuote (){

     var i = Math.round(Math.random() * 10) % this.quotes.length;
     this.content = this.quotes[i].quote;
     this.author = this.quotes[i].author;
     this.quote = {author : this.author, content : this.content };
     return this.quote;
  }
}
