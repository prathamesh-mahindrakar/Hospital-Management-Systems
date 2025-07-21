import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MedicineClass } from '../medicineClass/medicine-class';
import { MedicineService } from '../medicine-Service/medicine-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createmedicine',
  imports: [RouterLink, FormsModule],
  templateUrl: './createmedicine.html',
  styleUrl: './createmedicine.css'
})
export class Createmedicine {

  medicine: MedicineClass = new MedicineClass();

  constructor(private medicineService: MedicineService, private router: Router) { }

  onSubmit() {
    this.saveMedicine();
  }

  saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicineList();
    });
  }

  goToMedicineList() {
    this.router.navigate(['/view-medicine']);
  }

}
