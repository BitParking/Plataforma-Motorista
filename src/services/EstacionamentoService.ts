import {Injectable} from "@angular/core";
import { EstacionamentoClient } from "../clients/EstacionamentoClient";
import { Estacionamento } from "../models/Estacionamento";
import { resolve } from "dns";

@Injectable()
export class EstacionamentoService {
  private estacionamentos:Array<Estacionamento>;

  constructor(public estacionamentoClient: EstacionamentoClient) {
    this.estacionamentos = new Array<Estacionamento>();
  }

  public getAll() {
    this.estacionamentos = [];
    return this.estacionamentoClient.getAll().then((documentoEstacionamentos:Array<Estacionamento>) =>{
      documentoEstacionamentos.forEach(documento => {
        this.estacionamentos.push(this.builderEstacionamento(documento));
      });
      return this.estacionamentos;
    });
  }

  private builderEstacionamento(documento:any):Estacionamento{
    return new Estacionamento(documento.name,documento.fields.nome.stringValue,documento.fields.cnpj.stringValue,
      documento.fields.telefone.stringValue,documento.fields.endereco.stringValue,documento.fields.bairro.stringValue,
      documento.fields.cidade.stringValue,documento.fields.estado.stringValue,documento.fields.horario.stringValue,
      documento.fields.diasAtendimento.stringValue,documento.fields.qtdVagas.integerValue);
  }

  getItem(id) {
    return this.estacionamentoClient.get(id);
  }
}
