import {Component} from "@angular/core";
import {NavController, NavParams,Events} from "ionic-angular";
import {EstacionamentoService} from "../../services/EstacionamentoService";
import {EstacionamentoDetailPage} from "../estacionamento-detail/estacionamento-detail";
import { Estacionamento } from "../../models/Estacionamento";
import { User } from "../../models/User";
import { UserService } from '../../services/UserService';
import { MotoristaService } from '../../services/MotoristaService';
import { Motorista } from '../../models/Motorista';


@Component({
  selector: 'page-trips',
  templateUrl: 'pesquisa-estacionamentos.html'
})
export class PesquisaEstacionamento {
  public estacionamentos: Array<Estacionamento>;
  public userLogado:User;
  public qtdItensEncontrados:number;
  public nomeMotorista:string;
  public img:string = "https://firebasestorage.googleapis.com/v0/b/bitparking-tcc.appspot.com/o/logotipo.png?alt=media&token=ffd2e1ed-deca-41ad-9c1e-85a967e6e1a1";
 
  constructor(public nav: NavController, public estacionamentoService: EstacionamentoService,
              public navParams: NavParams, public userService:UserService,
              public events:Events,public motoristaService:MotoristaService) {
    this.userLogado = navParams.get("userLogado");
    this.qtdItensEncontrados = 0;
    this.estacionamentos = [];
    estacionamentoService.getAll(this.userLogado.getToken()).then(estacionamentos => {
      this.estacionamentos = estacionamentos;
      this.qtdItensEncontrados = this.estacionamentos.length;
      this.userService.tokenRenovator(this.userLogado.getRefreshToken()).then(newToken => {
        this.userLogado.setToken(newToken);
      })
    });
  }
  
  public showMenu(){
    this.motoristaService.searchByEmail(this.userLogado.getEmail(),this.userLogado.getToken()).then((motorista:Motorista)=>{
      this.events.publish('user:logado',motorista.getNome());
    });
  }

  // view parking detail
  viewDetail(estacionamento:Estacionamento) {
    this.nav.push(EstacionamentoDetailPage, {estacionamentoSelecionado: estacionamento});
  }
}
