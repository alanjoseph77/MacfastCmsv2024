import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';

const routes: Routes = [
  { path: 'dash', component: DoctorDashboardComponent },
  { path: 'add', component: DoctorAddComponent },
  { path: 'edit/:id', component: DoctorEditComponent },
  { path: 'list', component: DoctorListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
