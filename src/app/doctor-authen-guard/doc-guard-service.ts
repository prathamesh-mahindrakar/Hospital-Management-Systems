import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Docauth } from '../doctor-authentication/docauth';
import e from 'cors';

@Injectable({
  providedIn: 'root'
})
export class DocGuardService implements CanActivate {

  constructor(private docAuth: Docauth, private router: Router) { }

  canActivate() {
    if (this.docAuth.isUserLoggedIn()) {
      return true;
    } else {
      alert("You are not logged in as a doctor");
      this.router.navigate(['doclogin']);
      return false;
    }
  }

}
