import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MascotasService } from '../mascotas.service';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {

  check = true;
  navController = inject(NavController);
  mascotasSrv = inject(MascotasService);

  nombre:string = 'nueva';
  foto:string = 'https://mivet.com/hubfs/shutterstock_94462864.jpg';
  tipo:string = 'Perro';

  constructor() { }

  ngOnInit() {
    if(this.mascotasSrv.mascotas.length < 1){
      this.navController.navigateRoot('home');
    }
  }


  async crear(){
    // si quieren validan

    const nuevaMascoota = {
      nombre:this.nombre,
      tipo:this.tipo,
      avatar:this.foto
    };
    this.mascotasSrv.mascotas.push(nuevaMascoota);
    this.navController.navigateRoot('home',{animated:true});
  }
  async volver(){
    this.navController.pop();
  }
}
