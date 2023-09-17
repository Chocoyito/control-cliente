import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import { ConfiguracionService } from "../services/configuracion.service";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable()
export class ConfiguracionGuard implements CanActivate{

    constructor(private router: Router, private configuracionService: ConfiguracionService){}

    canActivate(): Observable<boolean>{
        return this.configuracionService.getConfiguracion().pipe(
            map(configuracion => {
                if (configuracion.permitirRegistro){
                    return true
                }
                else{
                    this.router.navigate(['login'])
                    return false
                }
            })
        )
    }
}