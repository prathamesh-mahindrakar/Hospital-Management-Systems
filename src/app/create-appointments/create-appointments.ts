import { Component } from '@angular/core';
import { AppointmentClass } from '../appointmentclass/appointment-class';
import { Appointmentservice } from '../appointment-service/appointmentservice';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-appointments',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-appointments.html',
  styleUrl: './create-appointments.css'
})
export class CreateAppointments {

  appointments: AppointmentClass = new AppointmentClass();

  constructor(private appointmentService: Appointmentservice, private router: Router) { }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointments).subscribe(data => {
      console.log('Appointment saved:', data);
      this.gotoAppointmentList();
    });
  }

  onSubmit() {
    this.saveAppointment();
  }

  gotoAppointmentList() {
    this.router.navigate(['/appointment']);
  }

}
