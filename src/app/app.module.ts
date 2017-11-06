import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: '', component: BetFormComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'scores', component: ScoreboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    ScoreboardComponent,
    NavbarComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
