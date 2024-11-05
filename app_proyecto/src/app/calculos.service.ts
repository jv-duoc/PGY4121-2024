import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  suma(n1:number,n2:number){
    const suma = n1+n2;
    return suma;
  }

  validarRut(rut:string){
    if(rut.includes('-')){
      return true;
    }
    else{
      return false;
    }
  }

}
