import { Component } from '@angular/core';
import { PatientService } from '../servicepatient/patient-service';
import { PatientClass } from '../patientclass/patient-class';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AdminAuth } from '../admin-authentication/admin-auth';


@Component({
  selector: 'app-admindash',
  imports: [CommonModule, RouterLink],
  templateUrl: './admindash.html',
  styleUrl: './admindash.css'
})
export class Admindash {

  patients: PatientClass[] = [];

  constructor(private patientService: PatientService, private adminAuthService: AdminAuth, private route: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientsList().subscribe(data => {
      console.log(data);
      this.patients = data;
    })
  }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.getPatients();
    });

  }

  logout() {
    this.adminAuthService.logout();
    this.route.navigate(['home']);
  }

}
