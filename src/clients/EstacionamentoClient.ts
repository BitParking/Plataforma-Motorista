import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Estacionamento } from '../models/Estacionamento';
import 'rxjs/add/operator/map';

@Injectable()
export class EstacionamentoClient {
  private BASE_URL:string = 'https://firestore.googleapis.com/v1beta1/';
  public documentoEstacionamentos:Array<{}>;

  constructor(public http: Http) { }

  getAll() {
    return new Promise((resolve, reject) => {

      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents/estacionamentos';

      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.documentoEstacionamentos = data.documents
          resolve(this.documentoEstacionamentos);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  get(path: string) {
    console.log("abacaxi")
    /*return new Promise((resolve, reject) => {
      let url = this.BASE_URL + path;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });*/
  }
/*
@TODO: criar converter entre o tipo documento -> Estacionamento
  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
*/
}