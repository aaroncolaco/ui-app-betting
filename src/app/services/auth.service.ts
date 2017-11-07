import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  signUp(userName:string, password:string) {
    console.log('New User Sign Up', userName, password);
  }

  signIn(userName:string, password:string) {
    console.log('User Sign In', userName, password);
  }

}
