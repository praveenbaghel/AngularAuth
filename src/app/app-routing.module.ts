import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { AuthGuard } from './auth.guard';
import { AuthSummaryGuard } from './auth-summary.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard, AuthSummaryGuard], pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
