import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  
  //private http = inject(HttpClient);
  constructor(private http:HttpClient) { }

  async obtenerDatos(){
    const idToken = await FirebaseAuthentication.getIdToken();
    console.log(idToken.token);
    const obs = this.http.get('https://pgy4121serverlessapi.vercel.app/api/cuenta',{
      headers:{
        "Authorization":"Bearer "+idToken.token
      }
    });
    return lastValueFrom(obs);
  }
}
