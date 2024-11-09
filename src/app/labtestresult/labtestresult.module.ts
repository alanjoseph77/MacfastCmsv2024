import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabtestresultRoutingModule } from './labtestresult-routing.module';
import { LabtestresultComponent } from './labtestresult.component';
import { LabtestresultAddComponent } from './labtestresult-add/labtestresult-add.component';
import { LabtestresultDashboardComponent } from './labtestresult-dashboard/labtestresult-dashboard.component';
import { LabtestresultListComponent } from './labtestresult-list/labtestresult-list.component';
import { LabtestresultEditComponent } from './labtestresult-edit/labtestresult-edit.component';


@NgModule({
  declarations: [
    LabtestresultComponent,
    LabtestresultAddComponent,
    LabtestresultDashboardComponent,
    LabtestresultListComponent,
    LabtestresultEditComponent
  ],
  imports: [
    CommonModule,
    LabtestresultRoutingModule
  ]
})
export class LabtestresultModule { }
