import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: 'dash', component: StaffDashboardComponent },
  { path: 'add', component: StaffAddComponent },
  { path: 'edit/:id', component: StaffEditComponent },
  { path: 'list', component: StaffListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
