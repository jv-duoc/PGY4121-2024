import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {

  check = true;
  navController = inject(NavController)
  constructor() { }

  ngOnInit() {
  }


  async volver(){
    this.navController.pop();
  }
}
