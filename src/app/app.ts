import { Component } from '@angular/core';
import { Admindash } from './admindash/admindash';
import { RouterOutlet } from '@angular/router';
import { Appointment } from './appointment/appointment';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'HSM_System';

}
