import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {

  prediction: number;
  private rate: number;
  private time;
  private hours: number;
  private coins: number; // number of coins to bet
  private balance: number; // number of coins in account

  public txHash: string;

  constructor(private dataService: DataService) {
    this.getWalletBalance();
    this.updateBitcoinRate();
    this.time = new Date().toLocaleTimeString();
    this.hours = new Date().getHours();
  }

  ngOnInit() {
    this.coins = 5;

    setInterval(() => this.updateBitcoinRate(), 5 * 60 * 1000);
  }

  private getWalletBalance() {
    this.dataService.getWalletBalance()
      .subscribe(data => {
        this.balance = data['balance'];
      }, err => console.error(err));
  }

  private updateBitcoinRate() {
    this.time = new Date().toLocaleTimeString();

    this.dataService.getRate()
      .subscribe(
      data => this.rate = data['bpi']['INR']['rate_float'],
      err => console.error(err)
      );
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
