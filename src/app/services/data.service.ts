import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Leader } from '../models/leader';

@Injectable()
export class DataService {

  private coindeskAPI: string;

  constructor(public http: HttpClient) {
    this.coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';
  }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  placeBet(prediction: number) {
    console.log(`You predicted: ${prediction}`);  // TODO: make API call
  }

  getWalletBalance(): number {
    return 10; // TODO: API call to get balance
  }

  getLeaderBoard(): Leader[] {
    const mock: Leader[] = [
      { username: 'johndoe', balance: 100 },
      { username: 'carol', balance: 96 },
      { username: 'dave', balance: 80 },
      { username: 'aliceparker', balance: 63 },
      { username: 'jane', balance: 60 },
      { username: 'steve', balance: 53 }
    ];
    return mock; // TODO: API call to get leaderboard
  }

}
