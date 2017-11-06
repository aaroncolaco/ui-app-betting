import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {

  bet: number;

  constructor() { }

  ngOnInit() {
    this.bet = (495663 + 494366) / 2;
  }

  placeBet() {
    console.log(`You bet: ${this.bet}`);
  }

}
