import { Component } from '@angular/core';
import { PatientClass } from '../patientclass/patient-class';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../servicepatient/patient-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  imports: [FormsModule, RouterLink],
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css'
})
export class UpdatePatient {

  id: number = 0;
  patient: PatientClass = new PatientClass();

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })
  }

  onSubmit() {
    this.patientService.updatePatient(this.id, this.patient).subscribe(data => {
      console.log(data);
      alert("Patient updated successfully");
      this.gotoDocDash();
    })
  }

  gotoDocDash() {
    this.router.navigate(['/docdash']);
  }
}
