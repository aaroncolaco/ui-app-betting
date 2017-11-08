import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }

  private clearBrowserToken() {
    localStorage.clear();
  }

  private setBrowserToken(username: string) {
    localStorage.setItem('username', username);
  }

  private hashPassword(password): string {
    return <string>Md5.hashStr(password);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('username') ? true : false;
  }

  signUp(username: string, password: string) {
    password = this.hashPassword(password);
    this.http.post(environment.apiUrl + '/users/sign-up', { username, password })
      .subscribe(data => {
        if (data['status'] === 200) {
          this.setBrowserToken(username);
          return true;
        }
        console.error(`Sign Up failed:`);
        return false;
      });
  }

  signIn(username: string, password: string) {
    password = this.hashPassword(password);
    this.http.post(environment.apiUrl + '/users/sign-in', { username, password })
      .subscribe(data => {
        if (data['status'] === 200) {
          this.setBrowserToken(username);
          return true;
        }
        console.error(`Sign In failed:`);
        return false;
      });
  }

  signOut() {
    this.clearBrowserToken();
  }
}
