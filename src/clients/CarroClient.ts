import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarroClient {
  private BASE_URL:string = 'https://firestore.googleapis.com/v1beta1/';
  constructor(public http: Http) { }

  insert(carroEntity: any,token:string,uidMotorista:string) {
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents/motoristas/'+uidMotorista+'/carros';

      let header =  new Headers()
      header.append('Authorization', `Bearer ${token}`)     

      this.http.post(url, carroEntity,{headers:header})
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}