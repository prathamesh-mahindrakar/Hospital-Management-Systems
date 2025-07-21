import { Component } from '@angular/core';
import { Appointmentservice } from '../appointment-service/appointmentservice';
import { AppointmentClass } from '../appointmentclass/appointment-class';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment',
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment {

  appointments: AppointmentClass[] = [];

  constructor(private appointmentService: Appointmentservice) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    })
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.getAppointments();
    });
  }
}
