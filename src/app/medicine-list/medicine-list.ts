import { Component } from '@angular/core';
import { MedicineService } from '../medicine-Service/medicine-service';
import { MedicineClass } from '../medicineClass/medicine-class';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './medicine-list.html',
  styleUrl: './medicine-list.css'
})
export class MedicineList {

  medicines: MedicineClass[] = [];

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit() {
    this.getMedicines();
  }

  getMedicines() {
    this.medicineService.getMedicine().subscribe(data => {
      this.medicines = data;
    })
  }

  updateMedicine(id: number) {
    this.router.navigate(['update-medicine', id]);
  }

  deleteMedicines(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(data => {
      console.log(data);
      this.getMedicines();
    })
  }



}
