import { Component } from '@angular/core';
import { PatientClass } from '../patientclass/patient-class';
import { PatientService } from '../servicepatient/patient-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-patients',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-patients.html',
  styleUrl: './create-patients.css'
})
export class CreatePatients {

  patient: PatientClass = new PatientClass();

  constructor(private patientService: PatientService, private router: Router) { }

  onSubmit() {
    this.savePatient();
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      alert("Patient created successfully");
      this.goToPatientList();
    })
  }

  goToPatientList() {
    this.router.navigate(['/docdash']);
  }

}
