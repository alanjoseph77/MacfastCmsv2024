import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineDashboardComponent } from './medicine-dashboard/medicine-dashboard.component';


@NgModule({
  declarations: [
    MedicinesComponent,
    MedicineAddComponent,
    MedicineListComponent,
    MedicineEditComponent,
    MedicineDashboardComponent
  ],
  imports: [
    CommonModule,
    MedicinesRoutingModule
  ]
})
export class MedicinesModule { }
