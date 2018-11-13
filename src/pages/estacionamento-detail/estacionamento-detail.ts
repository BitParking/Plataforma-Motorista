import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import { Estacionamento } from "../../models/Estacionamento";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-trip-detail',
  templateUrl: 'estacionamento-detail.html'
})
export class EstacionamentoDetailPage {
  public estacionamento:Estacionamento
  // number of adult
  public reservas = 1;
  public avatarImg = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/valet.png?alt=media&token=7da6026a-6500-4e9a-bcd2-d9e419c278b7";

  constructor(public nav: NavController, public navParams: NavParams,
              private iab: InAppBrowser,public geolocation:Geolocation) {
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
    this.geolocation.getCurrentPosition().then((resp) => {
      const latitude = resp.coords.latitude;
      const longitude = resp.coords.longitude;
      const enderecoDestino = this.estacionamento.getEndereco();
      const cidadeDestino = this.estacionamento.getCidade();
      const browser = this.iab.create('https://www.google.com/maps/dir/?api=1&origin='+latitude+','+longitude+'&destination='+enderecoDestino+','+cidadeDestino+',Brasil&travelmode=driving','_self');
      browser.show();
    })
  }
}
