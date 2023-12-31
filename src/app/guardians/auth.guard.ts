import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private fireAuth: AngularFireAuth){}

    canActivate(): Observable<boolean>{
        return this.fireAuth.authState.pipe(
            map( auth => {
                if(!auth){
                    this.router.navigate(['login'])
                    return false
                }
                else{
                    return true
                }
            })
        )
    }
}