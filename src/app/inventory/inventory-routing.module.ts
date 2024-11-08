import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryAddComponent } from './inventory-add/inventory-add.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
  { path: 'dash', component: InventoryDashboardComponent },
  { path: 'add', component: InventoryAddComponent },
  { path: 'edit/:id', component: InventoryEditComponent },
  { path: 'list', component: InventoryListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
