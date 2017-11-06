import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  loginValue: any;
  private _loginValueBS = new BehaviorSubject<any>('');


  constructor(private af: AngularFireAuth, private router: Router) {
    this._loginValueBS.next(this.loginValue);
  }

  firebaseSignUp(data) {
    let observable = Observable.fromPromise(this.af.auth.createUserWithEmailAndPassword(data.email, data.password));

     observable.subscribe(response => {

      if(response) {
        this.getToken();

        this.loginValue = localStorage.getItem('auth-token');
        this._loginValueBS.next(this.loginValue);
      }

    }, error => {
      console.log(error);
    });

     return observable;
  }

  firebaseLogin(data) {
   let observable = Observable.fromPromise(this.af.auth.signInWithEmailAndPassword(data.email, data.password));

   observable.subscribe(response => {

     if(response) {
       this.getToken();

       this.loginValue = localStorage.getItem('auth-token');
       this._loginValueBS.next(this.loginValue);
     }


   }, error => {
      console.log(error);
   });

   return observable;
  }

  getToken() {
    let tokenObs = Observable.fromPromise(this.af.auth.currentUser.getIdToken ());

    tokenObs.subscribe(token => {
      localStorage.setItem('auth-token', token);

      setTimeout(() => {
        this.router.navigate(['home']);
      })

    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.af.auth.signOut();
    localStorage.clear();
    this.router.navigate(['login']);
    window.location.reload();
  }

}
