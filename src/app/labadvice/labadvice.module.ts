import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabadviceRoutingModule } from './labadvice-routing.module';
import { LabadviceComponent } from './labadvice.component';
import { LabadviceAddComponent } from './labadvice-add/labadvice-add.component';
import { LabadviceListComponent } from './labadvice-list/labadvice-list.component';
import { LabadviceEditComponent } from './labadvice-edit/labadvice-edit.component';
import { LabadviceHistoryComponent } from './labadvice-history/labadvice-history.component';
import { LabadviceDashboardComponent } from './labadvice-dashboard/labadvice-dashboard.component';


@NgModule({
  declarations: [
    LabadviceComponent,
    LabadviceAddComponent,
    LabadviceListComponent,
    LabadviceEditComponent,
    LabadviceHistoryComponent,
    LabadviceDashboardComponent
  ],
  imports: [
    CommonModule,
    LabadviceRoutingModule
  ]
})
export class LabadviceModule { }
