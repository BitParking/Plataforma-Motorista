import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/User';
import { process } from '../../env';

@Injectable()
export class UserClient {
  private BASE_URL:string = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
  private KEY_APP:string;

  constructor(public http: Http) {
    console.log(process)
    this.KEY_APP = process.env.KEY_APP;
   }

  insert(newUser: User) {
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + "signupNewUser?key="+this.KEY_APP;

      let user = {
        "email": newUser.getEmail(),
        "password" : newUser.getPassword(),
        "returnSecureToken": true
      }

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  refreshToken(refreshToken:string){
    return new Promise((resolve, reject) => {
      let url = "https://securetoken.googleapis.com/v1/token?key="+this.KEY_APP;

      let requestRefreshToken = {
          "grant_type":"refresh_token",
          "refresh_token": refreshToken
      }

      this.http.post(url, refreshToken)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  login(userAuth:User){
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + "verifyPassword?key="+this.KEY_APP;

      let user = {
        "email": userAuth.getEmail(),
        "password" : userAuth.getPassword(),
        "returnSecureToken": true
      }

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}