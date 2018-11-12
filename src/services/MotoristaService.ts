import {Injectable} from "@angular/core";
import { Motorista } from '../models/Motorista';
import { MotoristaClient } from '../clients/MotoristaClient';
 
@Injectable()
export class MotoristaService {
  private motoristaEntity:any;
  private selectQuery:any;
 
  constructor(public motoristaClient: MotoristaClient) {
  }
 
  public create(motorista:Motorista,token:string):Promise<any> {
    this.buildMotoristaEntity(motorista);
    return this.motoristaClient.insert(this.motoristaEntity,token);
  }

  public searchByEmail(email:string,token:string):Promise<Motorista>{
    return new Promise((resolve) => {
      this.buildSelectQueryByEmail(email);
       this.motoristaClient.findByEmail(this.selectQuery,token).then((motoristaResponse)=>{
           resolve(this.buildMotorista(motoristaResponse));
       });
    });
  }

  private buildSelectQueryByEmail(email:string){
      this.selectQuery = {
        "structuredQuery": {
            "select": {},
                "from": [{"collectionId": "motoristas"}],
                        "where" : {
                            "fieldFilter" : { 
                                "field": {"fieldPath": "email"}, 
                                "op":"EQUAL", 
                                "value": {"stringValue": email}
                            }
                        }
                }
      }
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

  private buildMotorista(motoristaEntity:any):Motorista{
    const resultNormalized = motoristaEntity.name.split(/s+\//);
    return new Motorista(resultNormalized[4],motoristaEntity.fields.nome.stringValue,
        motoristaEntity.fields.cnh.integerValue,motoristaEntity.fields.cpf.integerValue,
        motoristaEntity.fields.telefone.stringValue,motoristaEntity.fields.email.stringValue,[]);
  }
}