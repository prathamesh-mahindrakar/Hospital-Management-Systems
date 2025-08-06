// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { MedicineClass } from '../medicineClass/medicine-class';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedicineService {

//   private baseUrl = 'http://localhost:8080/api/v3';

//   constructor(private http: HttpClient) { }

//   getMedicine(): Observable<MedicineClass[]> {
//     return this.http.get<MedicineClass[]>(`${this.baseUrl}`);
//   }

//   createMedicine(medicine: MedicineClass): Observable<MedicineClass> {
//     return this.http.post<MedicineClass>(`${this.baseUrl}/medicine`, medicine);
//   }

//   getMedicineById(id: number): Observable<MedicineClass> {
//     return this.http.get<MedicineClass>(`${this.baseUrl}/medicine/${id}`);
//   }

//   updateMedicine(id: number, medicine: MedicineClass): Observable<MedicineClass> {
//     return this.http.put<MedicineClass>(`${this.baseUrl}/medicine/${id}`, medicine);
//   }

//   deleteMedicine(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/medicine/${id}`);
//   }


// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineClass } from '../medicineClass/medicine-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  // ✅ Proxy path through Vercel serverless function
  private proxyUrl = '/api/proxy?path=';

  constructor(private http: HttpClient) { }

  getMedicine(): Observable<MedicineClass[]> {
    return this.http.get<MedicineClass[]>(`${this.proxyUrl}medicine`);
  }

  createMedicine(medicine: MedicineClass): Observable<MedicineClass> {
    return this.http.post<MedicineClass>(`${this.proxyUrl}medicine`, medicine);
  }

  getMedicineById(id: number): Observable<MedicineClass> {
    return this.http.get<MedicineClass>(`${this.proxyUrl}medicine/${id}`);
  }

  updateMedicine(id: number, medicine: MedicineClass): Observable<MedicineClass> {
    return this.http.put<MedicineClass>(`${this.proxyUrl}medicine/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.proxyUrl}medicine/${id}`);
  }
}