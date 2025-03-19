import { Component, OnInit } from '@angular/core';
import { ServeiAutenticarService } from '../servei-autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(public serveiAutenticar: ServeiAutenticarService) { }

  ngOnInit(): void {
    this.serveiAutenticar.loginOK=false;
    localStorage.removeItem("email");
  }

  googleLogin() {
    this.serveiAutenticar.googleLogin()
  }
  logout() {
    this.serveiAutenticar.logout()
  }

  login() {
    this.serveiAutenticar.login();
  }
}
