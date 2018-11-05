import {Injectable} from "@angular/core";
import { Motorista } from '../models/Motorista';
import { MotoristaClient } from '../clients/MotoristaClient';
 
@Injectable()
export class MotoristaService {
  private motoristaEntity:any;
 
  constructor(public motoristaClient: MotoristaClient) {
  }
 
  public create(motorista:Motorista,token:string):Promise<any> {
    this.buildMotoristaEntity(motorista);
    return this.motoristaClient.insert(this.motoristaEntity,token);
  }
 
  private buildMotoristaEntity(motorista:Motorista):void{
    var normalizeCpf:string = motorista.getCpf().replace( /(\.|-)/g, "" );
    this.motoristaEntity = {
      "fields": {
          "cnh": {
              "integerValue": motorista.getCnh()
          },
          "cpf": {
              "integerValue": normalizeCpf
          },
          "email": {
              "stringValue": motorista.getEmail()
          },
          "nome": {
              "stringValue": motorista.getNome()
          },
          "telefone": {
              "stringValue": motorista.getTelefone()
          }
      }
    }
  }
}