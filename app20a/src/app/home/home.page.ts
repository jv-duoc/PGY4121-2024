import { Component } from '@angular/core';
import { ViewDidLeave } from '@ionic/angular';
import { Mascota } from 'src/_models/mascota';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidLeave {

  mostrarPerros:boolean;
  mostrarGatos:boolean = true;

  titulo:string = 'Mis mascotas';
  mascotas:Mascota[] = []
  constructor() {
    this.mostrarPerros = true;
  }

  ionViewDidEnter(){
    this.mascotas = [
      {
        nombre: 'Mani',
        tipo: 'Perro',
        avatar:'https://mivet.com/hubfs/shutterstock_94462864.jpg'
      },
      {
        nombre:'Maite',
        tipo:'Gato'
      },
      {
        nombre:'Zuri',
        tipo:'Perro'
      },
      {
        nombre:'Ati',
        tipo:'Gato'
      },
      {
        nombre:'Rata',
        tipo:'Gato',
      }
    ]
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
