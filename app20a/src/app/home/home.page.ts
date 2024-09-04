import { Component, inject } from '@angular/core';
import { AlertController, LoadingController, ToastController, ViewDidLeave } from '@ionic/angular';
import { lastValueFrom, timer } from 'rxjs';
import { Mascota } from 'src/_models/mascota';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidLeave {
  //
  mostrarPerros:boolean;
  mostrarGatos:boolean = true;

  titulo:string = 'Mis mascotas';
  
  mascotasSrv = inject(MascotasService);
  loaderSrv = inject(LoadingController);
  alertSrv = inject(AlertController);
  toastSrv = inject(ToastController);

  constructor() {
    this.mostrarPerros = true;
  }

  async ngOnInit(){
    const loader  = await this.loaderSrv.create({
      message:'Cargando mascotas',
      duration:999999
    });
    await loader.present();
    await lastValueFrom(timer(500)); // simular carga de red
    this.mascotasSrv.cargarMascotas();
    await loader.dismiss();
  }

  async ionViewDidEnter(){
    
    
  }


  async eliminar(mascota:Mascota){
    const alerta = await this.alertSrv.create({
      header:'Eliminar mascota',
      message:`¿Estás seguro de eliminar a ${mascota.nombre}?`,
      buttons:[
        {
          text:'eliminar',
          role:'ok'
        },
        {
          text:'cancelar',
          role:'cancel'
        }
        
      ]
    });
    await alerta.present();
    const resultado = await alerta.onDidDismiss();
    if(resultado.role === 'ok'){
      this.mascotasSrv.mascotas = this.mascotasSrv.mascotas.filter(m => m !== mascota);
      //notificamos
      const toast = await this.toastSrv.create({
        message:`${mascota.nombre} eliminado`,
        duration:3000,
        position:'top'
      });
      toast.present();
    }
  }

  ionViewDidLeave(): void {
   
  }



  obtenerAvatar(mascota:Mascota){
    if(mascota.avatar){
      return mascota.avatar;
    }else{
      return 'https://ionicframework.com/docs/img/demos/avatar.svg';
    }
  }

}
