import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { Motorista } from '../../models/Motorista';
import { User } from '../../models/User';
import { UserService } from '../../services/UserService';
import { MotoristaService } from "../../services/MotoristaService";
import { CarroPage } from "../carro-registro/carro";
import { Keyboard } from "@ionic-native/keyboard";
 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public motorista:Motorista
  public user:User

  constructor(public nav: NavController, public userService:UserService,
              public motoristaService:MotoristaService,public keyboard: Keyboard,public events:Events) {
    keyboard.disableScroll(false);
    this.motorista = new Motorista("","",null,"","","",[]);
    this.user = new User("","",true,"","","");
  }
 
  // register and go to home page
  register() {
    this.userService.create(this.user).then((newUser)=>{
      this.motorista.setEmail(this.user.getEmail());
      this.motoristaService.create(this.motorista,newUser.getToken()).then((result)=>{
        this.events.publish('user:logado',result.fields.nome.stringValue);  
        const resultNormalized = result.name.split(/s+\//);
        this.motorista.setUid(resultNormalized[4]);
        this.nav.setRoot(CarroPage, {userLogado: newUser,motoristaCadastrado:this.motorista});
      });
    });
  }
 
  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
