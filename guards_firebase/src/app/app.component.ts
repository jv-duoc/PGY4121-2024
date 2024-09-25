import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  async ngOnInit() {
    //veremos si no estamos en un celular
    if(!Capacitor.isNativePlatform()){

      const firebaseConfig = {
        apiKey: "AIzaSyAjf-AfKHmx82xBYXbRMEClldFIMmUW-Ss",
        authDomain: "testfirebase-3adb3.firebaseapp.com",
        projectId: "testfirebase-3adb3",
        storageBucket: "testfirebase-3adb3.appspot.com",
        messagingSenderId: "610473080742",
        appId: "1:610473080742:web:cb504485d8b7b0eaafc167"
      };

      initializeApp(firebaseConfig)
      console.log('Firebase web initialized');
    }
  }
}
