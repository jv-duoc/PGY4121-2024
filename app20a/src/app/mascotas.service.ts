import { Injectable } from '@angular/core';
import { Mascota } from 'src/_models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  mascotas:Mascota[] = []
  constructor() { }

  cargarMascotas(){
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
}
