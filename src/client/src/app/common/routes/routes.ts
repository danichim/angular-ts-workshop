import {Routes} from "@angular/router";
import {LoginComponent} from "../../components/auth/login/login.component";
import {HomeComponent} from "../../components/home/home.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {AuthGuards} from "./auth.guards";
import {SignupComponent} from "../../components/auth/signup/signup.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuards]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuards]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuards]}
];
