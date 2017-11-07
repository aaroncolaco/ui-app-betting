import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  clearBrowserToken(userName: string) {
    localStorage.clear();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('userName') ? true : false;
  }

  setBrowserToken(userName: string) {
    localStorage.setItem('userName', userName);
  }

  // TODO: call API
  signUp(userName: string, password: string) {
    console.log('New User Sign Up', userName, password);
    this.setBrowserToken(userName);
  }

  signIn(userName: string, password: string) {
    console.log('User Sign In', userName, password);
    this.setBrowserToken(userName);
  }
}
