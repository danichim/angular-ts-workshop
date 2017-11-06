import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../common/services/auth/auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('toggleMessage', [
      state('opened', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('closed', style({
        transform: 'translate3d(-110%,0,0)',
        display: 'none'
      })),
      transition('opened => closed', animate('400ms ease-in-out')),
      transition('closed => opened', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SignupComponent implements OnInit {

  errorMessage: string;
  errorState: string = 'closed';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    this.auth.firebaseSignUp(data.value)
      .subscribe(response => {
        return response
      }, error => {
        this.errorState = 'opened';
        this.errorMessage = error.message;

        setTimeout(() => {
          this.errorState = 'closed';
        }, 3000)
      })
  }

}
