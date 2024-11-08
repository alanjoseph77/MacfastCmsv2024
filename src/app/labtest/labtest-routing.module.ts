import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabtestDashboardComponent } from './labtest-dashboard/labtest-dashboard.component';
import { LabtestAddComponent } from './labtest-add/labtest-add.component';
import { LabtestEditComponent } from './labtest-edit/labtest-edit.component';
import { LabtestListComponent } from './labtest-list/labtest-list.component';

const routes: Routes = [
  { path: 'dash', component: LabtestDashboardComponent },
  { path: 'add', component: LabtestAddComponent },
  { path: 'edit/:id', component: LabtestEditComponent },
  { path: 'list', component: LabtestListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabtestRoutingModule { }
