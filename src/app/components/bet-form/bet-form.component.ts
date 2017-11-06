import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {

  bet: number;
  private current: number;
  private previous: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getRate().subscribe(data => {
      const inr_rate: number = data['bpi']['INR']['rate_float'];

      this.previous = this.current || inr_rate;
      this.current = inr_rate;

      this.bet = (this.current + this.previous) / 2;
    });
  }

  placeBet() {
    this.dataService.placeBet(this.bet);
  }

}
