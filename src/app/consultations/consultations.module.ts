import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationsRoutingModule } from './consultations-routing.module';
import { ConsultationsComponent } from './consultations.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { ConsultationEditComponent } from './consultation-edit/consultation-edit.component';
import { ConsultationDashboardComponent } from './consultation-dashboard/consultation-dashboard.component';
import { ConsultationHistoryComponent } from './consultation-history/consultation-history.component';


@NgModule({
  declarations: [
    ConsultationsComponent,
    ConsultationAddComponent,
    ConsultationListComponent,
    ConsultationEditComponent,
    ConsultationDashboardComponent,
    ConsultationHistoryComponent
  ],
  imports: [
    CommonModule,
    ConsultationsRoutingModule
  ]
})
export class ConsultationsModule { }
