import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  toastSrv = inject(ToastController);
  loginSrv = inject(LoginService);
  nav = inject(NavController);

  constructor() { }

  ngOnInit() {
  }

  async ingresar(){
    try {
      await this.loginSrv.login(this.email,this.password);
      this.nav.navigateRoot('/home');
    } catch (error:any) {
      const toast = await this.toastSrv.create({
        message:error.message,
        duration:3000,
        position:'top'
      });
      console.log(error);
      toast.present();
    }
  }

}
