import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabtestRoutingModule } from './labtest-routing.module';
import { LabtestComponent } from './labtest.component';
import { LabtestAddComponent } from './labtest-add/labtest-add.component';
import { LabtestListComponent } from './labtest-list/labtest-list.component';
import { LabtestEditComponent } from './labtest-edit/labtest-edit.component';
import { LabtestDashboardComponent } from './labtest-dashboard/labtest-dashboard.component';


@NgModule({
  declarations: [
    LabtestComponent,
    LabtestAddComponent,
    LabtestListComponent,
    LabtestEditComponent,
    LabtestDashboardComponent
  ],
  imports: [
    CommonModule,
    LabtestRoutingModule
  ]
})
export class LabtestModule { }
