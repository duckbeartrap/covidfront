import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsAnalyticsComponent } from './us-analytics.component';

const routes: Routes = [
  {
    path: '',
    component: UsAnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsAnalyticsRoutingModule { }
