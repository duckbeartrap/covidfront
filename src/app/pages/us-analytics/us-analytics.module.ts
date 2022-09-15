import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsAnalyticsRoutingModule } from './us-analytics-routing.module';
import { UsAnalyticsComponent } from './us-analytics.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'app/pipes/pipes.module';

@NgModule({
  declarations: [
    UsAnalyticsComponent
  ],
  imports: [
    CommonModule,
    UsAnalyticsRoutingModule,
    MatTableModule,
    PipesModule
  ]
})
export class UsAnalyticsModule { }
