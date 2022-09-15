import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '@services';
import { Analytics } from '@interfaces';
import { Observable } from 'rxjs';
import { STATES } from '../../../assets/static/states';

@Component({
  selector: 'app-state-analytics',
  templateUrl: './state-analytics.component.html',
  styleUrls: ['./state-analytics.component.scss']
})
export class StateAnalyticsComponent implements OnInit {
  states = STATES;
  data$: Observable<Analytics[]>;
  columns: string[] = [
    'cases',
    'negative',
    'positive',
    'hospitalizedCur',
    'hospitalizedCul', 
    'icuCur',
    'icuCul',
    'ventCur',
    'ventCul',
    'recovered',
    'deaths',
    'totalTests'
  ];
  topColumns: string[] = [
    'totalCases',
    'tests',
    'hospitalized',
    'inIcu',
    'onVent',
    'outcomes',
    'totalTestResults'
  ]

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

  updateState(event){
    this.data$ = this.analyticsService.getState(event.value.toLowerCase());
  }

}
