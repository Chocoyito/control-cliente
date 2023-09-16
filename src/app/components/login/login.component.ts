import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObject = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit(): void {
    this.loginService.getUsuarioAuth().subscribe(auth => {
      if (auth)
        this.router.navigate(['/']) // Nos encargamos que si el usuario desea volver al login sin haber cerrado sesion, lo mande de regreso a Inicio.
    })
  }

  login() {
    const { email, password } = this.loginObject

    this.loginService.login({ email, password })
    .then(resolve =>
      this.router.navigate(['/']))
    .catch(error => 
      this.router.navigate(['login']))
  }
}
