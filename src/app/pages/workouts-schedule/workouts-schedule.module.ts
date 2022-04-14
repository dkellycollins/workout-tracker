import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsSchedulePageRoutingModule } from './workouts-schedule-routing.module';

import { WorkoutsSchedulePage } from './workouts-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsSchedulePageRoutingModule
  ],
  declarations: [WorkoutsSchedulePage]
})
export class WorkoutsSchedulePageModule {}
