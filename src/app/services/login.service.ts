import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs";

export interface LoginData {
    email: string,
    password: string
}

@Injectable()
export class LoginService {
    constructor(private authService: AngularFireAuth) { }

    login(login: LoginData) {
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(login.email, login.password).then(datos => resolve(datos)).
            catch(error => reject(error))
        })
    }

    getUsuarioAuth() { // Retorna un observable
        return this.authService.authState.pipe(
            map(auth => auth)
        )
    }

    logout(){
        this.authService.signOut()
    }
}