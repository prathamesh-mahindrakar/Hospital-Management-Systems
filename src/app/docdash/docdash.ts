import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PatientClass } from '../patientclass/patient-class';
import { PatientService } from '../servicepatient/patient-service';
import { DocGuardService } from '../doctor-authen-guard/doc-guard-service';
import { Docauth } from '../doctor-authentication/docauth';

@Component({
  selector: 'app-docdash',
  imports: [CommonModule, RouterLink],
  templateUrl: './docdash.html',
  styleUrl: './docdash.css'
})
export class Docdash {

  patient: PatientClass[] = [];

  constructor(private patientService: PatientService, private router: Router, private docauthService: Docauth) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientsList().subscribe(data => {
      this.patient = data;
    })
  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      this.getPatients();
    });
  }

  viewPatient(id: number) {
    this.router.navigate(['view-patient', id]);
  }

  logout() {
    this.docauthService.logout();
    this.router.navigate(['home']);
  }

}
