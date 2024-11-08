import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';


@NgModule({
  declarations: [
    StaffsComponent,
    StaffAddComponent,
    StaffEditComponent,
    StaffListComponent,
    StaffDashboardComponent
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule
  ]
})
export class StaffsModule { }
