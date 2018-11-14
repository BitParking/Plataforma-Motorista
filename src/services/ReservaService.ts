import {Injectable} from "@angular/core";
import { ReservaClient } from '../clients/ReservaClient';
import { Reserva } from "../models/Reserva";

 
@Injectable()
export class ReservaService {
  private reservaEntity:any;
 
  constructor(public reservaClient: ReservaClient) {
  }
 
  public create(reserva:Reserva,token:string):Promise<any> {
    this.buildReservaEntity(reserva);
    return this.reservaClient.insert(this.reservaEntity,token);
  }
 
  private buildReservaEntity(reserva:Reserva):void{
    this.reservaEntity = {
      "fields": {
          "uidEstacionamento": {
              "stringValue": reserva.getUidEstacionamento()
          },
          "uidMotorista": {
              "stringValue": reserva.getUidMotorista()
          },
          "status": {
              "stringValue": reserva.getStatus()
          },
          "tempoReservado": {
            "integerValue": reserva.getTempoReservado()
          },
          "dataHoraInicio": {
            "stringValue": new Date().getTime().toString()
          },
          "dataHoraFim": {
            "stringValue": "0"
          },
      }
    }
  }
}