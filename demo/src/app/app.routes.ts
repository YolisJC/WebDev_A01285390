import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  //login
  { path: 'home', component: HomeComponent },    //home
  { path: '', redirectTo: 'login', pathMatch: 'full' } //primero a login luego de login a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
