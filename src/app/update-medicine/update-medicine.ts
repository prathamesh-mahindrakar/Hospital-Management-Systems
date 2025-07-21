import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicineClass } from '../medicineClass/medicine-class';
import { MedicineService } from '../medicine-Service/medicine-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  imports: [FormsModule, RouterLink],
  templateUrl: './update-medicine.html',
  styleUrl: './update-medicine.css'
})
export class UpdateMedicine {

  id: number = 0;
  medicine: MedicineClass = new MedicineClass();

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    });
  }

  onSubmit() {
    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(data => {
      console.log('Medicine updated successfully:', data);
      this.gotoMedicineList();
    });
  }

  gotoMedicineList() {
    this.router.navigate(['view-medicine']);
  }
}