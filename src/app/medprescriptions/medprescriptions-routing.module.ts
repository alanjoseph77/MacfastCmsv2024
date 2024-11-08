import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedprescriptionDashboardComponent } from './medprescription-dashboard/medprescription-dashboard.component';
import { MedprescriptionListComponent } from './medprescription-list/medprescription-list.component';
import { MedprescriptionEditComponent } from './medprescription-edit/medprescription-edit.component';
import { MedprescriptionAddComponent } from './medprescription-add/medprescription-add.component';

const routes: Routes = [
  { path: 'dash', component: MedprescriptionDashboardComponent },
  { path: 'add', component: MedprescriptionAddComponent },
  { path: 'edit/:id', component: MedprescriptionEditComponent },
  { path: 'list', component: MedprescriptionListComponent },
  { path: 'history', component: MedprescriptionDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedprescriptionsRoutingModule { }
