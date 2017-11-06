import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ['title']
})
export class NavbarComponent implements OnInit {

  isTrue: boolean;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  checkLogin() {
    this.isTrue = false;
    let token = localStorage.getItem('auth-token');
    if(token) {
      if(this.auth.loginValue || !this.jwtHelper.isTokenExpired(token)) {
        this.isTrue = true;
      }
    }
    return this.isTrue;
  }

  signOut(){
    this.auth.logout();
  }

}
