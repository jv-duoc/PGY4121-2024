import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AlertController, NavController } from '@ionic/angular';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginSrv = inject(LoginService);
  nav = inject(NavController);
  cuenta = inject(CuentaService);
  alert = inject(AlertController);
  datos:any|undefined;
  constructor() {}

  async ngOnInit(){
    try {
      this.datos = await this.cuenta.obtenerDatos();
    } catch (error:any) {
      console.log(error);
      this.mostrarError(error.error.message);
    }
  }

  async mostrarError(texto:string){
    const alert = await this.alert.create({
      message:texto,
      buttons:['Ok'],
      translucent:true
    });
    alert.present();
  }

  async logout(){
    await this.loginSrv.cerrarSesion();
    this.nav.navigateRoot('/login')
  }
}
