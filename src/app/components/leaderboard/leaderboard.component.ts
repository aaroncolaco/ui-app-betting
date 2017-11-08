import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Leader } from '../../models/leader';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaders: Leader[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.leaders = this.dataService.getLeaderBoard();
    setInterval(() => {
      this.leaders = this.dataService.getLeaderBoard();
    }, 5000);
  }

}


