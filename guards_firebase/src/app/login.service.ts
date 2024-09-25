import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  nombreUsuario = '';
  logeado:boolean = false;
  constructor() { }

  public login(user:string,password:string){
    //maneja la sesiòn
    if(user.length > 1 && password == '123'){
      //guardamos el estado de la sesion
      this.logeado = true;
      // y el nombre del usuario
      this.nombreUsuario = user;
    }else{
      throw {};
    }
  }
}
