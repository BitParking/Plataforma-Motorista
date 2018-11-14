import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, Events } from 'ionic-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { PesquisaEstacionamento } from '../pages/pesquisa-estacionamentos/pesquisa-estacionamentos';
import { LoginPage } from "../pages/login/login";
import { Motorista } from '../models/Motorista';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  public nomeMotorista:string;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public events: Events
  ) {
    this.initializeApp();
    this.appMenuItems = [
      {title: 'Pesquisar', component: PesquisaEstacionamento, icon: 'search'},
      {title: 'Minhas Reservas', component: PesquisaEstacionamento, icon: 'clock'}
    ];
    events.subscribe('user:logado',(motorista:Motorista)=>{
      this.nomeMotorista = motorista.getNome();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
