import { inject } from "@angular/core";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { NavController } from "@ionic/angular";

export async function logeadoGuard(){
    const nav = inject(NavController)
    const user = await FirebaseAuthentication.getCurrentUser();

    if(user.user){ // hay un usuario logeado
        return true;
    }else{
        //mandar al login
        nav.navigateRoot('/login');
        return false;
    }
}

export const visitaGuard = async() => {
    const nav = inject(NavController)
    const user = await FirebaseAuthentication.getCurrentUser();
    if(user.user){ // hay un usuario logeado
        nav.navigateRoot('/home'); //mandamos a inicio
        return false;
    }else{        
        return true;
    }
}
