import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientAddComponent,
    PatientListComponent,
    PatientEditComponent,
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
