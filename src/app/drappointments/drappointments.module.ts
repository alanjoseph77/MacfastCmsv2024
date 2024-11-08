import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrappointmentsRoutingModule } from './drappointments-routing.module';
import { DrappointmentsComponent } from './drappointments.component';
import { DrappointmentAddComponent } from './drappointment-add/drappointment-add.component';
import { DrappointmentListComponent } from './drappointment-list/drappointment-list.component';
import { DrappointmentEditComponent } from './drappointment-edit/drappointment-edit.component';
import { DrappointmentDashboardComponent } from './drappointment-dashboard/drappointment-dashboard.component';


@NgModule({
  declarations: [
    DrappointmentsComponent,
    DrappointmentAddComponent,
    DrappointmentListComponent,
    DrappointmentEditComponent,
    DrappointmentDashboardComponent
  ],
  imports: [
    CommonModule,
    DrappointmentsRoutingModule
  ]
})
export class DrappointmentsModule { }
