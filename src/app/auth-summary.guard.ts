import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSummaryGuard implements CanActivate {

  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const data: any = localStorage.getItem('user');
      let user;
      if (data !== null) {
        user = JSON.parse(data);
      }
    const role: string = user?.role;
    if (role === 'admin') {
      return true;
    }
      this.router.navigate(['/home']);
      return false;
    

  }
  
}
