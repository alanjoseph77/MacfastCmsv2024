import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryAddComponent } from './inventory-add/inventory-add.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryAddComponent,
    InventoryListComponent,
    InventoryDashboardComponent,
    InventoryEditComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
