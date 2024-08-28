import { Component, inject } from '@angular/core';
import { AnimationController, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter {

  usuario:string = '';
  pass:string = '';
  animacion = inject(AnimationController)
  
  anim1;
  constructor() {
    this.anim1 = this.animacion.create()
                .duration(2000)
                .from('transform','rotate(0deg)')
                .to('transform','rotate(360deg)');
  }

  ionViewDidEnter(): void {
    console.log(document.querySelector('#capibara'));
  }

  ngAfterViewInit(): void {
    const el = document.querySelector('#capibara')!;
    this.anim1.addElement(el);
  }
  
  ingresar(){
    if(this.pass == '123'){
      this.animar();
    }else{
      alert('No autorizado')
    }
  }

  animar(){
    this.anim1.play()
    //luego imple
  }
}
