import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationDashboardComponent } from './consultation-dashboard/consultation-dashboard.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { ConsultationEditComponent } from './consultation-edit/consultation-edit.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';
import { ConsultationHistoryComponent } from './consultation-history/consultation-history.component';

const routes: Routes = [
  { path: 'dash', component: ConsultationDashboardComponent },
  { path: 'add', component: ConsultationAddComponent },
  { path: 'edit/:id', component: ConsultationEditComponent },
  { path: 'list', component: ConsultationListComponent },
  { path: 'history', component: ConsultationHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationsRoutingModule { }
