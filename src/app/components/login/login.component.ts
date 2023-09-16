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


  ngOnInit(): void {}

  login() {
    const { email, password } = this.loginObject

    this.loginService.login({ email, password }).then(resolve => {
      this.router.navigate(['/'])
    })
      .catch(error => {
        this.router.navigate(['login'])
    })
  }
}
