// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { PatientClass } from '../patientclass/patient-class';

// @Injectable({
//   providedIn: 'root'
// })
// export class PatientService {

//   constructor(private http: HttpClient) { }

//   private baseUrl = 'http://localhost:8080/api/v1';

//   getPatientsList(): Observable<PatientClass[]> {
//     return this.http.get<PatientClass[]>(`${this.baseUrl}`);
//   }

//   deletePatient(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/patient/${id}`);
//   }

//   createPatient(patient: PatientClass): Observable<PatientClass> {
//     return this.http.post<PatientClass>(`${this.baseUrl}/patient`, patient);
//   }

//   getPatientById(id: number): Observable<PatientClass> {
//     return this.http.get<PatientClass>(`${this.baseUrl}/patient/${id}`);
//   }

//   updatePatient(id: number, patient: PatientClass): Observable<PatientClass> {
//     return this.http.put<PatientClass>(`${this.baseUrl}/patient/${id}`, patient);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientClass } from '../patientclass/patient-class';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  // ✅ Base URL now points to the proxy endpoint
  private proxyUrl = '/api/proxy?path=';

  getPatientsList(): Observable<PatientClass[]> {
    return this.http.get<PatientClass[]>(`${this.proxyUrl}patients`);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.proxyUrl}patient/${id}`);
  }

  createPatient(patient: PatientClass): Observable<PatientClass> {
    return this.http.post<PatientClass>(`${this.proxyUrl}patient`, patient);
  }

  getPatientById(id: number): Observable<PatientClass> {
    return this.http.get<PatientClass>(`${this.proxyUrl}patient/${id}`);
  }

  updatePatient(id: number, patient: PatientClass): Observable<PatientClass> {
    return this.http.put<PatientClass>(`${this.proxyUrl}patient/${id}`, patient);
  }
}
