import { Component } from '@angular/core';
import { PatientService } from '../servicepatient/patient-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PatientClass } from '../patientclass/patient-class';

@Component({
  selector: 'app-view-patient',
  imports: [RouterLink],
  templateUrl: './view-patient.html',
  styleUrl: './view-patient.css'
})
export class ViewPatient {

  id: number = 0;
  patient: PatientClass = new PatientClass();
  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })
  }

}


