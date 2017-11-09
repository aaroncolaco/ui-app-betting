import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

import { Leader } from '../models/leader';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  private coindeskAPI: string;
  private username: string;

  constructor(private authService: AuthService, public http: HttpClient) {
    this.coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';
    this.username = this.authService.getUsername();
  }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  placeBet(prediction: number) {
    return this.http
      .post(environment.apiUrl + '/users/predict', { username: this.username, prediction });
  }

  getWalletBalance() {
    return this.http
      .get(environment.apiUrl + '/users/wallet?username=' + this.authService.getUsername());
  }

  getLeaderBoard() {
    return this.http
      .get(environment.apiUrl + '/users/leaderboard?username=janedoe');
  }
}
