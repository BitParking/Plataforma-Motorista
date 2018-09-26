import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EstacionamentoService} from "../../services/EstacionamentoService";
import {EstacionamentoDetailPage} from "../estacionamento-detail/estacionamento-detail";
import { Estacionamento } from "../../models/Estacionamento";


@Component({
  selector: 'page-trips',
  templateUrl: 'pesquisa-estacionamentos.html'
})
export class PesquisaEstacionamento {
  public estacionamentos: Array<Estacionamento>;
  public qtdItensEncontrados:number;
  public img:string = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/logotipo.png?alt=media&token=ffd2e1ed-deca-41ad-9c1e-85a967e6e1a1";

  constructor(public nav: NavController, public estacionamentoService: EstacionamentoService) {
    this.qtdItensEncontrados = 0;
    this.estacionamentos = [];
    estacionamentoService.getAll().then(estacionamentos => {
      this.estacionamentos = estacionamentos;
      console.log(this.estacionamentos);
      this.qtdItensEncontrados = this.estacionamentos.length;
    });
  }
  

  // view parking detail
  viewDetail(estacionamento:Estacionamento) {
    this.nav.push(EstacionamentoDetailPage, {estacionamentoSelecionado: estacionamento});
  }
}
