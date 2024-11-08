import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabadviceDashboardComponent } from './labadvice-dashboard/labadvice-dashboard.component';
import { LabadviceHistoryComponent } from './labadvice-history/labadvice-history.component';
import { LabadviceListComponent } from './labadvice-list/labadvice-list.component';
import { LabadviceEditComponent } from './labadvice-edit/labadvice-edit.component';
import { LabadviceAddComponent } from './labadvice-add/labadvice-add.component';

const routes: Routes = [
  { path: 'dash', component: LabadviceDashboardComponent },
  { path: 'add', component: LabadviceAddComponent },
  { path: 'edit/:id', component: LabadviceEditComponent },
  { path: 'list', component: LabadviceListComponent },
  { path: 'history', component: LabadviceHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabadviceRoutingModule { }
