import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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

  findByEmail(selectQuery:any,token:string){
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents:runQuery';

      let header =  new Headers()
      header.append('Authorization', `Bearer ${token}`)     

      this.http.post(url, selectQuery,{headers:header})
        .subscribe((result: any) => {
          const pathMotorista = result.json()[0].document.name;
          const requisicao = this.BASE_URL + pathMotorista;
          this.http.get(requisicao,{headers:header})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          },
          (error) => {
            reject(error.json());
          });
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}