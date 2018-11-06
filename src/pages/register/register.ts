import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { Motorista } from '../../models/Motorista';
import { User } from '../../models/User';
import { UserService } from '../../services/UserService';
import {PesquisaEstacionamento} from "../pesquisa-estacionamentos/pesquisa-estacionamentos";
import { MotoristaService } from "../../services/MotoristaService";
 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public motorista:Motorista
  public user:User
 
 
  constructor(public nav: NavController, public userService:UserService,
              public motoristaService:MotoristaService) {
    this.motorista = new Motorista("",null,"","","",[]);
    this.user = new User("","",true,"","","");
  }
 
  // register and go to home page
  register() {
    this.userService.create(this.user).then((newUser)=>{
      this.motorista.setEmail(this.user.getEmail());
      this.motoristaService.create(this.motorista,newUser.getToken()).then(()=>{
        this.nav.setRoot(PesquisaEstacionamento, {userLogado: newUser});
      });
    });
  }
 
  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
