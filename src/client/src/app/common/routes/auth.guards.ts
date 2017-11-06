import {CanActivate, Router} from "@angular/router";
import {JwtHelper} from "angular2-jwt";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuards implements CanActivate{

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) {}

  canActivate(){
    if(localStorage.length > 0) {
      let token = localStorage.getItem('auth-token');
      if(this.jwtHelper.isTokenExpired(token)){
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
