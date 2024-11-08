import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';


@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorAddComponent,
    DoctorListComponent,
    DoctorEditComponent,
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
