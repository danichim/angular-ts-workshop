import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AngularFireModule} from "angularfire2";
import { LoginComponent } from './components/auth/login/login.component';
import {AngularFireAuthModule} from "angularfire2/auth";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./common/services/auth/auth.service";
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {routes} from "./common/routes/routes";
import {AuthGuards} from "./common/routes/auth.guards";
import { SignupComponent } from './components/auth/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCP8rBmIO4-Zzivws6mtZYeYLYajXHDLJg",
    authDomain: "workshop-typescript.firebaseapp.com",
    databaseURL: "https://workshop-typescript.firebaseio.com",
    projectId: "workshop-typescript",
    storageBucket: "workshop-typescript.appspot.com",
    messagingSenderId: "689012592069"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
