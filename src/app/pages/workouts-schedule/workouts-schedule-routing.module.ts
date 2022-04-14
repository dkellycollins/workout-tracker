import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutsSchedulePage } from './workouts-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsSchedulePageRoutingModule {}
