import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrappointmentDashboardComponent } from './drappointment-dashboard/drappointment-dashboard.component';
import { DrappointmentListComponent } from './drappointment-list/drappointment-list.component';
import { DrappointmentAddComponent } from './drappointment-add/drappointment-add.component';
import { DrappointmentEditComponent } from './drappointment-edit/drappointment-edit.component';

const routes: Routes = [
  { path: 'dash', component: DrappointmentDashboardComponent },
  { path: 'add', component: DrappointmentAddComponent },
  { path: 'edit/:id', component: DrappointmentEditComponent },
  { path: 'list', component: DrappointmentListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrappointmentsRoutingModule { }
