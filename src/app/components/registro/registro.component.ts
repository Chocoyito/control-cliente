import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userObject = {
    email: '',
    password: ''
  }


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    const {email, password} = this.userObject
    this.loginService.registrarUsuario({email, password})
    .then(resolve => this.router.navigate(['/']))
    .catch(reject => this.router.navigate(['login']))
  }

}
