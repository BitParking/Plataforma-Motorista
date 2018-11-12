import {Injectable} from "@angular/core";
import { Carro } from '../models/Carro';
import { CarroClient } from '../clients/CarroClient';
 
@Injectable()
export class CarroService {
  private carroEntity:any;
 
  constructor(public carroClient: CarroClient) {
  }
 
  public create(carro:Carro,token:string,uidMotorista:string):Promise<any> {
    this.buildCarroEntity(carro);
    return this.carroClient.insert(this.carroEntity,token,uidMotorista);
  }
 
  private buildCarroEntity(carro:Carro):void{
    this.carroEntity = {
      "fields": {
          "placa": {
              "stringValue": carro.getPlaca()
          },
          "cor": {
              "stringValue": carro.getCor()
          },
          "Modelo": {
              "stringValue": carro.getModelo()
          }
      }
    }
  }
}