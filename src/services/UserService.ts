import {Injectable} from "@angular/core";
import { resolve } from "dns";
import { User } from '../models/User';
import { UserClient } from "../clients/UserClient";
 
@Injectable()
export class UserService {
  private userEntity:any;
 
  constructor(public userClient: UserClient) {
  }
 
  public create(newUser:User) {
    return this.userClient.insert(newUser).then((userEntity) =>{
      return this.buildUser(userEntity);
    })
    .catch((userEntity) =>{
      return this.buildUser(userEntity);
    });
  }
 
  public login(userAuth:User) {
    return this.userClient.login(userAuth).then((userEntity) =>{
      return this.buildUser(userEntity);
    })
    .catch((userEntity) =>{
      return this.buildUser(userEntity);
    });
  }
 
  public tokenRenovator(refreshToken:string){
    return this.userClient.refreshToken(refreshToken).then((response) =>{
      return this.validateRefreshToken(response);
    })
    .catch((response) =>{
      return this.validateRefreshToken(response);
    });
  }

  public sendResetPassword(email:string){
    return this.userClient.sendResetPassword(email);
  }

  private validateRefreshToken(response:any): string {
    if(response.error != null && response.error.code == 400){
      throw new Error("RefreshToken invalido!");
    }else{
      return response.id_token;
    }
  }

  private buildUser(userEntity:any):User{
    if(userEntity.error != null && userEntity.error.code == 400){
      throw new Error("Email ou Senha está incorreto, tente novamente.");
    }else{
      return new User(userEntity.email, null, true, userEntity.idToken, userEntity.refreshToken, userEntity.localId);
    }
  }
}
