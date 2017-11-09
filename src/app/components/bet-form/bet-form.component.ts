import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {

  prediction: number;
  private current: number;
  private previous: number;
  private hour: number;
  private coins: number; // number of coins to bet
  private balance: number; // number of coins in account

  public txHash: string;

  constructor(private dataService: DataService) {
    this.getWalletBalance();
  }

  ngOnInit() {
    // TODO: get from API
    this.dataService.getRate().subscribe(data => {
      const inr_rate: number = data['bpi']['INR']['rate_float'];

      this.previous = this.current || inr_rate;
      this.current = inr_rate;

      this.hour = new Date().getHours();

      this.coins = 5;
    });
  }

  private getWalletBalance() {
    this.dataService.getWalletBalance()
      .subscribe(data => {
        this.balance = data['balance'];
      }, err => console.error(err));
  }

  makePrediction(prediction: number) {
    this.prediction = prediction;
    this.dataService.placeBet(this.prediction)
      .subscribe(data => {
        this.txHash = data['txHash'];
        this.getWalletBalance();
      }, err => console.error(err));
  }

}
