import { Injectable } from '@angular/core';
import { FirebaseAuthentication, User } from '@capacitor-firebase/authentication';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:User|null = null;

  //creamos un metodo que llamares cuando firebase efectivamente se haya cargado
  cargarFirebase!: () => void;

  //creamos una promesa que se resuelve cuando firebase se haya cargado
  firebaseCargado = new Promise<void>((resolve)=>{
    this.cargarFirebase = resolve;
  });

  constructor() {
    FirebaseAuthentication.getCurrentUser();
    FirebaseAuthentication.addListener('authStateChange',(status)=>{
      this.user = status.user;
      this.cargarFirebase();
    })
    
  }


  async registro(email:string,password:string){
    const resultado = await FirebaseAuthentication.createUserWithEmailAndPassword({
      email,
      password
    })
  }

  async login(email:string,password:string){
    const resultadoLogin = await FirebaseAuthentication.signInWithEmailAndPassword({
      email,
      password
    });
  }
  
  async cerrarSesion(){
    await FirebaseAuthentication.signOut();
  }
}
