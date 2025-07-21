import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Docauth } from '../doctor-authentication/docauth';

@Component({
  selector: 'app-doctor-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './doctor-login.html',
  styleUrl: './doctor-login.css'
})
export class DoctorLogin {
  username: string = "";
  password: string = "";

  inValidLogin: boolean = false;

  constructor(private router: Router, private docAuth: Docauth) { }

  checkLogin() {

    if (this.docAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert("Invalid Credentials");
      this.router.navigate(['home']);
    }
  }
}
