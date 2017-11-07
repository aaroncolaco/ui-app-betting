import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private newUser: boolean;

  constructor(private authService: AuthService) {
    this.newUser = false;
  }

  ngOnInit() {
  }

  authTypeChange(flag: boolean) {
    this.newUser = flag;
  }

  userAuth(userName:string, password:string) {
    if (this.newUser) {
      this.authService.signUp(userName, password);
    } else {
      this.authService.signIn(userName, password);
    }
  }
}
