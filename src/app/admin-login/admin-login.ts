import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminAuth } from '../admin-authentication/admin-auth';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin {


  username2: string = "";
  password2: string = "";

  inValidLogin: boolean = false;


  constructor(private adminAuth: AdminAuth, private router: Router) { }

  checkLogin() {
    if (this.adminAuth.authenticate(this.username2, this.password2)) {
      this.router.navigate(['admin']);
      this.inValidLogin = false;
    } else {
      alert("Invalid Credentials");
      this.inValidLogin = true;
      this.router.navigate(['home']);

    }

  }
}
