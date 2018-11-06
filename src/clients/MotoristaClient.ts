import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/User';

@Injectable()
export class MotoristaClient {
  private BASE_URL:string = 'https://firestore.googleapis.com/v1beta1/';
  constructor(public http: Http) { }

  insert(motoristaEntity: any,token:string) {
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents/motoristas';

      let header =  new Headers()
      header.append('Authorization', `Bearer ${token}`)     

      this.http.post(url, motoristaEntity,{headers:header})
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}