import { Routes } from '@angular/router';
import { Appointment } from './appointment/appointment';
import { Admindash } from './admindash/admindash';
import { CreateAppointments } from './create-appointments/create-appointments';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { CreatePatients } from './create-patients/create-patients';
import { MedicineList } from './medicine-list/medicine-list';
import { Createmedicine } from './createmedicine/createmedicine';
import { UpdatePatient } from './update-patient/update-patient';
import { ViewPatient } from './view-patient/view-patient';
import { UpdateMedicine } from './update-medicine/update-medicine';
import { DoctorLogin } from './doctor-login/doctor-login';
import { AdminLogin } from './admin-login/admin-login';
import { AdminGuard } from './admin-authen-guard/admin-guard';
import { DocGuardService } from './doctor-authen-guard/doc-guard-service';

export const routes: Routes = [
    { path: 'admin', component: Admindash, canActivate: [AdminGuard] },
    { path: 'appointment', component: Appointment, canActivate: [AdminGuard] },
    { path: 'create-appointment', component: CreateAppointments, canActivate: [AdminGuard] },
    { path: 'home', component: Home },
    { path: 'docdash', component: Docdash, canActivate: [DocGuardService] },
    { path: 'create-patient', component: CreatePatients, canActivate: [DocGuardService] },
    { path: 'view-medicine', component: MedicineList, canActivate: [DocGuardService] },
    { path: 'add-medicine', component: Createmedicine, canActivate: [DocGuardService] },
    { path: 'update-patient/:id', component: UpdatePatient, canActivate: [DocGuardService] },
    { path: 'view-patient/:id', component: ViewPatient, canActivate: [DocGuardService] },
    { path: 'update-medicine/:id', component: UpdateMedicine, canActivate: [DocGuardService] },
    { path: 'doclogin', component: DoctorLogin },
    { path: 'adlogin', component: AdminLogin },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
