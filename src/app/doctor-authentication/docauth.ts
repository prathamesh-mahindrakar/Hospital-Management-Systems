import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Docauth {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("username", username);
      return true;
    } else {
      alert("Invalid Credentials");
      return false;
    }
  }

  isUserLoggedIn() {
    console.log("Doctor is Login Already");
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("username");
    console.log("Doctor is Logout Successfully");
  }

}
