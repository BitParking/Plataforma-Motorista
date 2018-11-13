import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Keyboard} from '@ionic-native/keyboard';
import {LaunchNavigator} from '@ionic-native/launch-navigator';

import {ActivityService} from "../services/activity-service";
import {EstacionamentoService} from "../services/EstacionamentoService";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {EstacionamentoDetailPage} from "../pages/estacionamento-detail/estacionamento-detail";
import { EstacionamentoClient } from "../clients/EstacionamentoClient";
import { PesquisaEstacionamento } from '../pages/pesquisa-estacionamentos/pesquisa-estacionamentos';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { UserClient } from "../clients/UserClient";
import { UserService } from "../services/UserService";
import { MotoristaClient } from '../clients/MotoristaClient';
import { MotoristaService } from "../services/MotoristaService"; 
import { CarroPage } from '../pages/carro-registro/carro';
import { CarroService } from "../services/CarroService";
import { CarroClient } from "../clients/CarroClient";
import { Geolocation } from "@ionic-native/geolocation";


// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    LoginPage,
    CarroPage,
    NotificationsPage,
    RegisterPage,
    EstacionamentoDetailPage,
    PesquisaEstacionamento
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__Bitparkin',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    LoginPage,
    CarroPage,
    NotificationsPage,
    RegisterPage,
    EstacionamentoDetailPage,
    PesquisaEstacionamento
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    EstacionamentoService,
    EstacionamentoClient,
    UserClient,
    UserService,
    MotoristaClient,
    MotoristaService,
    CarroService,
    CarroClient, 
    WeatherProvider,
    LaunchNavigator,
    InAppBrowser,
    Geolocation
  ]
})

export class AppModule {
}
