import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    ScoreboardComponent,
    NavbarComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
