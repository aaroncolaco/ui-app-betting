import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private coindeskAPI: string = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';

  constructor(public http: HttpClient) { }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  placeBet(amount: number) {
    console.log(`You bet: ${amount}`);
  }

}
