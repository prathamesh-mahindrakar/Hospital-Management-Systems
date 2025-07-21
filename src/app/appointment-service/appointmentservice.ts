import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentClass } from '../appointmentclass/appointment-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Appointmentservice {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/v2';

  getAllAppointments(): Observable<AppointmentClass[]> {
    return this.http.get<AppointmentClass[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: AppointmentClass): Observable<AppointmentClass> {
    return this.http.post<AppointmentClass>(`${this.baseUrl}/appointment`, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/appointment/${id}`);
  }
}
