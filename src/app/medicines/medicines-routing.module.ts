import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineDashboardComponent } from './medicine-dashboard/medicine-dashboard.component';

const routes: Routes = [
  { path: 'dash', component: MedicineDashboardComponent },
  { path: 'add', component: MedicineAddComponent },
  { path: 'edit/:id', component: MedicineEditComponent },
  { path: 'list', component: MedicineListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }
