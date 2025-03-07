import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardsComponent } from './pages/cards/cards.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },  //login
  { path: 'home', component: HomeComponent },    //home
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] //dashboard protegido
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard] //perfil protegido
  },
  { 
    path: 'cards', 
    component: CardsComponent, 
    canActivate: [AuthGuard] //perfil protegido
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' } 
  //primero a login luego de login a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
