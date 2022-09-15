import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/us-analytics/us-analytics.module').then(m => m.UsAnalyticsModule) 
  },
  { 
    path: 'state', 
    loadChildren: () => import('./pages/state-analytics/state-analytics.module').then(m => m.StateAnalyticsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
