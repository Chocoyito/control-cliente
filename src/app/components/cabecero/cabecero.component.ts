import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean
  loggedInUser: string // Obtiene el correo

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getUsuarioAuth().subscribe(auth => {
      if (auth){
        this.isLoggedIn = true
        this.loggedInUser = auth.email
      }
      else{
        this.isLoggedIn = false
      }
    } )
  }

  logout(){
    this.loginService.logout()
    this.isLoggedIn = false
    this.router.navigate(['login'])
  }

}
