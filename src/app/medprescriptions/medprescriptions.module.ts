import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedprescriptionsRoutingModule } from './medprescriptions-routing.module';
import { MedprescriptionsComponent } from './medprescriptions.component';
import { MedprescriptionAddComponent } from './medprescription-add/medprescription-add.component';
import { MedprescriptionListComponent } from './medprescription-list/medprescription-list.component';
import { MedprescriptionEditComponent } from './medprescription-edit/medprescription-edit.component';
import { MedprescriptionDashboardComponent } from './medprescription-dashboard/medprescription-dashboard.component';
import { MedprescriptionHistoryComponent } from './medprescription-history/medprescription-history.component';


@NgModule({
  declarations: [
    MedprescriptionsComponent,
    MedprescriptionAddComponent,
    MedprescriptionListComponent,
    MedprescriptionEditComponent,
    MedprescriptionDashboardComponent,
    MedprescriptionHistoryComponent
  ],
  imports: [
    CommonModule,
    MedprescriptionsRoutingModule
  ]
})
export class MedprescriptionsModule { }
