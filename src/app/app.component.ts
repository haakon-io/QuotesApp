import { Component, OnInit } from '@angular/core';
import { QuotesService } from './common/services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading : boolean = true;
  quote = {author : 'Loading...', content : 'Often times the only missing ingredient to success is action, many are willing but many do not take the necessary action...'};
  constructor(private quotesService: QuotesService){

  }

  ngOnInit(){

    if(this.quote.author == 'Loading...'){
      this.isLoading = true;
    }
    this.loadQuote();
  }

  loadQuote() {
    //Using setTimeout here to display the loading sequence.
    setTimeout(() => {

      this.isLoading = false;
      this.quote = this.quotesService.randomQuote();
    }, 2000);
  }

}
