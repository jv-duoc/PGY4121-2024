import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginSrv = inject(LoginService);
  nav = inject(NavController);
  constructor() {}


  async logout(){
    await this.loginSrv.cerrarSesion();
    this.nav.navigateRoot('/login')
  }
}
