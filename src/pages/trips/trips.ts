import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EstacionamentoService} from "../../services/EstacionamentoService";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { Estacionamento } from "../../models/Estacionamento";


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  public estacionamentos: Array<Estacionamento>;
  public qtdItensEncontrados:number;
  public img:string = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/logotipo.png?alt=media&token=ffd2e1ed-deca-41ad-9c1e-85a967e6e1a1";

  constructor(public nav: NavController, public estacionamentoService: EstacionamentoService) {
    estacionamentoService.getAll().then(estacionamentos => {
      this.estacionamentos = estacionamentos;
      console.log(this.estacionamentos);
      this.qtdItensEncontrados = this.estacionamentos.length;
    });
  }
  

  // view parking detail
  viewDetail(estacionamento:Estacionamento) {
    this.nav.push(TripDetailPage, {estacionamentoSelecionado: estacionamento});
  }
}
