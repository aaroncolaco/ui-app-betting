import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

const appRoutes: Routes = [
  { path: '', component: BetFormComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    NavbarComponent,
    SignInComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
