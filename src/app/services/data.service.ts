import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private coindeskAPI: string = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';

  constructor(public http: HttpClient) { }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  placeBet(prediction: number) {
    console.log(`You predicted: ${prediction}`);  // TODO: make API call
  }

  getWalletBalance():number {
    return 10; // TODO: API call to get balance
  }

  getLeaderBoard():Object {
    return {}; // TODO: API call to get leaderboard
  }

}
