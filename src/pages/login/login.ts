import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController, Events} from "ionic-angular";
import {PesquisaEstacionamento} from "../pesquisa-estacionamentos/pesquisa-estacionamentos";
import {RegisterPage} from "../register/register";
import { User } from "../../models/User";
import { UserService } from "../../services/UserService";
import { MotoristaService } from '../../services/MotoristaService';
import { Motorista } from "../../models/Motorista";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  public userAuth:User;
  public errorMessage:string;
 
  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController,
              public toastCtrl: ToastController, public userService:UserService,
              public events:Events, public motoristaService:MotoristaService) {
    this.errorMessage = "";
    this.userAuth = new User("","",true,"","","");
    this.menu.swipeEnable(false);
  }
 
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.userService.login(this.userAuth).then(user => {
      this.motoristaService.searchByEmail(user.getEmail(),user.getToken()).then((motorista:Motorista)=>{
        this.events.publish('user:logado',motorista);
        this.events.publish('motorista:logado',motorista)
        this.nav.setRoot(PesquisaEstacionamento, {userLogado: user});
      });
    })
    .catch((e:Error) =>{
      this.errorMessage = e.message;
      this.showErrorMessage();
    });
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Esqueceu sua senha?',
      message: "Informe seu email de cadastro para enviarmos o link de reset da senha.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.userService.sendResetPassword(data.email).then(()=>{
                let toast = this.toastCtrl.create({
                  message: 'Email enviado com sucesso!!!',
                  duration: 3000,
                  position: 'top',
                  cssClass: 'dark-trans',
                  closeButtonText: 'OK',
                  showCloseButton: true
                });
                toast.present();
            });
          }
        }
      ]
    });
    forgot.present();
  }

  showErrorMessage() {
    const prompt = this.forgotCtrl.create({
      title: 'Falha ao logar',
      message: this.errorMessage,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    this.userAuth = new User("","",true,"","","");
    prompt.present();
  }

}
