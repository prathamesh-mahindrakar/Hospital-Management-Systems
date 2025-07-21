import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuth } from '../admin-authentication/admin-auth';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private adminAuth: AdminAuth, private router: Router) { }

  canActivate() {

    if (this.adminAuth.isUserLoggedIn()) {
      return true;
    } else {
      alert("You are not authorized to access this page. Please log in as an admin.");
      this.router.navigate(['adlogin']);
      return false;
    }
  }
}
