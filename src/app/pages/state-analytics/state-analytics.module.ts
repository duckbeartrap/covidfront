import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateAnalyticsRoutingModule } from './state-analytics-routing.module';
import { StateAnalyticsComponent } from './state-analytics.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PipesModule } from 'app/pipes/pipes.module';

@NgModule({
  declarations: [
    StateAnalyticsComponent
  ],
  imports: [
    CommonModule,
    StateAnalyticsRoutingModule,
    MatSelectModule,
    MatTableModule,
    PipesModule,
    MatPaginatorModule
  ]
})
export class StateAnalyticsModule { }
