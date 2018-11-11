import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {RegisterPage} from "../register/register";
import { Carro } from '../../models/Carro';
import { User } from "../../models/User";
import { Motorista } from '../../models/Motorista';


@Component({
  selector: 'carro-register',
  templateUrl: 'carro.html'
})
export class CarroPage {

  public newCar:Carro;
  public userLogado:User;
  public motoristaCadastrado:Motorista;

  constructor(public nav: NavController,public navParams: NavParams) {
    this.userLogado = navParams.get("userLogado");
    this.motoristaCadastrado = navParams.get("motoristaCadastrado");
    this.newCar = new Carro("","","");
  }
 
  // entra na tela inicial de que mostra os estacionamentos
  entrar(newCar:Carro) {
    this.nav.setRoot(RegisterPage);
  }
}
