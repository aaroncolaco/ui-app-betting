import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Leader } from '../models/leader';

import { environment } from '../../environments/environment';

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

  getLeaderBoard() {
    return this.http
      .get(environment.apiUrl + '/users/leaderboard?username=janedoe');
  }
}
