import { Component, inject } from '@angular/core';
import { AnimationController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter,ViewWillEnter {

  usuario:string = '';
  pass:string = '';
  
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  constructor() {
  }

  //ocurre cuando se va a entrar a esta vista, antes de la animación
  ionViewWillEnter(): void {
    
  }

  //se ejecuta cuando ya se entró a la vista, despues de las animaciones
  ionViewDidEnter(): void {
    this.usuario = '';
    this.pass = '';
  }
  
  ingresar(){
    if(this.usuario == 'admin' && this.pass == '123'){
     this.loginSrv.nombreUsuario = this.usuario;
     this.navController.navigateForward('/bienvenida');
    }else{
      alert('No autorizado');
    }
  }

}
