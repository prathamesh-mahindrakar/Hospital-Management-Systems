import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuth {

  constructor() { }

  authenticate(username2: string, password2: string) {
    if (username2 == "admin" && password2 == "admin") {
      sessionStorage.setItem("username2", username2);
      return true;
    } else {
      alert("Invalid Credentials");
      return false;
    }
  }

  isUserLoggedIn() {
    console.log("User is Login Already");
    let user = sessionStorage.getItem("username2");

    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem("username2");
    console.log("User is Logout Successfully");
  }

}
