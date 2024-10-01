import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  async registro(){

  }

  async login(email:string,password:string){
    const resultadoLogin = await FirebaseAuthentication.signInWithEmailAndPassword({
      email,
      password
    });
  }
  
  async cerrarSesion(){

  }
}
