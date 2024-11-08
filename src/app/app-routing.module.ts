import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesComponent } from './medicines/medicines.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { StaffsComponent } from './staffs/staffs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DrappointmentsComponent } from './drappointments/drappointments.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { MedprescriptionsComponent } from './medprescriptions/medprescriptions.component';
import { LabadviceComponent } from './labadvice/labadvice.component';
import { LabtestComponent } from './labtest/labtest.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  //empty routes
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'medicines', component: MedicinesComponent,
    loadChildren: () => import('./medicines/medicines.module').then(x => x.MedicinesModule)
  },
  {
    path: 'staffs', component: StaffsComponent,
    loadChildren: () => import('./staffs/staffs.module').then(x => x.StaffsModule)
  },
  {
    path: 'auth', component: AuthenticationComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: 'inventory', component: InventoryComponent,
    loadChildren: () => import('./inventory/inventory.module').then(x => x.InventoryModule)
  },
  {
    path: 'drappointments', component: DrappointmentsComponent,
    loadChildren: () => import('./drappointments/drappointments.module').then(x => x.DrappointmentsModule)
  },
  {
    path: 'patients', component: PatientsComponent,
    loadChildren: () => import('./patients/patients.module').then(x => x.PatientsModule)
  },
  {
    path: 'doctors', component: DoctorsComponent,
    loadChildren: () => import('./doctors/doctors.module').then(x => x.DoctorsModule)
  },
  {
    path: 'consultations', component: ConsultationsComponent,
    loadChildren: () => import('./consultations/consultations.module').then(x => x.ConsultationsModule)
  },
  {
    path: 'medprescriptions', component: MedprescriptionsComponent,
    loadChildren: () => import('./medprescriptions/medprescriptions.module').then(x => x.MedprescriptionsModule)
  },
  {
    path: 'labadvices', component: LabadviceComponent,
    loadChildren: () => import('./labadvice/labadvice.module').then(x => x.LabadviceModule)
  },
  {
    path: 'labtests', component: LabtestComponent,
    loadChildren: () => import('./labtest/labtest.module').then(x => x.LabtestModule)
  },
  {
    path: 'billings', component: BillingComponent,
    loadChildren: () => import('./billing/billing.module').then(x => x.BillingModule)
  },
  {
    path: '**',redirectTo: 'auth/notfound', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
