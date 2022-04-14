import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'workouts/schedule', pathMatch: 'full' },
  {
    path: 'workouts/schedule',
    loadChildren: () => import('./pages/workouts-schedule/workouts-schedule.module').then(m => m.WorkoutsSchedulePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
