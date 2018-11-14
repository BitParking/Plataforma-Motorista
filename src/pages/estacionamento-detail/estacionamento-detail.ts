import {Component} from "@angular/core";
import {NavController, NavParams, Events} from "ionic-angular";
import { Estacionamento } from "../../models/Estacionamento";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { Motorista } from "../../models/Motorista";
import { Reserva } from "../../models/Reserva";
import { ReservaService } from "../../services/ReservaService";
import { User } from "../../models/User";
import { UserService } from '../../services/UserService';


@Component({
  selector: 'page-trip-detail',
  templateUrl: 'estacionamento-detail.html'
})
export class EstacionamentoDetailPage {
  public estacionamento:Estacionamento
  public motorista:Motorista
  public usuarioLogado:User
  public reservas = 1;
  public valorTotal:number;
  public avatarImg = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/valet.png?alt=media&token=7da6026a-6500-4e9a-bcd2-d9e419c278b7";

  constructor(public nav: NavController, public navParams: NavParams,
              private iab: InAppBrowser,public geolocation:Geolocation,
              public events:Events, public reservaService:ReservaService,
              public userService:UserService) {
    this.motorista = new Motorista("","",0,"","","",[]);
    this.estacionamento = navParams.get("estacionamentoSelecionado");
    this.usuarioLogado = navParams.get("usuarioLogado");
    this.motorista = navParams.get("motoristaLogado");
    this.valorTotal = this.getCalculoValorTotal();
  }

  // minus adult when click minus button
  diminuiReserva() {
    this.reservas--;
    this.valorTotal = this.getCalculoValorTotal();
  }

  // plus adult when click plus button
  aumentaReserva() {
    this.reservas++;
    this.valorTotal = this.getCalculoValorTotal();
  }

  getCalculoValorTotal():number{
    return (this.reservas * this.estacionamento.getPrecoMinuto());
  }

  // go to checkout page
  checkinReserva() {
    const resultNormalized = this.estacionamento.getPath().split(/s+\//);
    const uidEstacionamento = resultNormalized[4];


    const reserva = new Reserva(uidEstacionamento,
                                  this.motorista.getUid(),
                                  this.reservas,
                                  "Aguardando Confirmação",
                                  "","");

    this.reservaService.create(reserva,this.usuarioLogado.getToken()).then(()=>{
      this.userService.tokenRenovator(this.usuarioLogado.getRefreshToken()).then(newToken => {
        this.usuarioLogado.setToken(newToken);
        this.geolocation.getCurrentPosition().then((resp) => {
          const latitude = resp.coords.latitude;
          const longitude = resp.coords.longitude;
          const enderecoDestino = this.estacionamento.getEndereco();
          const cidadeDestino = this.estacionamento.getCidade();
          const browser = this.iab.create('https://www.google.com/maps/dir/?api=1&origin='+latitude+','+longitude+'&destination='+enderecoDestino+','+cidadeDestino+',Brasil&travelmode=driving','_self');
          browser.show();
        })
      })
    })      
  }
}
