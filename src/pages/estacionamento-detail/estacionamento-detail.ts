import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import { Estacionamento } from "../../models/Estacionamento";
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-trip-detail',
  templateUrl: 'estacionamento-detail.html'
})
export class EstacionamentoDetailPage {
  public estacionamento:Estacionamento
  // number of adult
  public reservas = 1;
  public avatarImg = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/valet.png?alt=media&token=7da6026a-6500-4e9a-bcd2-d9e419c278b7";

  constructor(public nav: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.estacionamento = navParams.get("estacionamentoSelecionado");
  }

  // minus adult when click minus button
  diminuiReserva() {
    this.reservas--;
  }

  // plus adult when click plus button
  aumentaReserva() {
    this.reservas++;
  }

  // go to checkout page
  checkinReserva() {
    const enderecoDestino = this.estacionamento.getEndereco();
    const cidadeDestino = this.estacionamento.getCidade();
    const browser = this.iab.create('https://www.google.com/maps/dir/?api=1&origin=-30.035132,-51.226612&destination='+enderecoDestino+','+cidadeDestino+',Brasil&travelmode=driving','_self');
    browser.show();
    //this.nav.push(CheckoutTripPage);
  }
}