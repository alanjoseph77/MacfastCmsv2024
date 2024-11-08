import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingAddComponent } from './billing-add/billing-add.component';
import { BillingEditComponent } from './billing-edit/billing-edit.component';


@NgModule({
  declarations: [
    BillingComponent,
    BillingDashboardComponent,
    BillingListComponent,
    BillingAddComponent,
    BillingEditComponent
   
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
