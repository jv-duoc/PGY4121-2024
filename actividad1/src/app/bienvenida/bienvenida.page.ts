import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  loginSrv = inject(LoginService);
  constructor() { }

  ngOnInit() {
    
  }

}
