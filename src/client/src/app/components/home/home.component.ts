import { Component, OnInit } from '@angular/core';
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jwtHelper: JwtHelper = new JwtHelper();
  user: Object;
  expTime: Date;

  constructor() { }

  ngOnInit() {
    this.user = this.jwtHelper.decodeToken(localStorage.getItem('auth-token'));
    this.expTime = this.jwtHelper.getTokenExpirationDate(localStorage.getItem('auth-token'));
  }

}
