import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { DataService } from './services/data.service';

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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
