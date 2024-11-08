import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingAddComponent } from './billing-add/billing-add.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';

const routes: Routes = [
  { path: 'dash', component: BillingDashboardComponent },
  { path: 'add', component: BillingAddComponent },
  { path: 'edit/:id', component: BillingEditComponent },
  { path: 'list', component: BillingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
