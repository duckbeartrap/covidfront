import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '@services';
import { Analytics, Pagination } from '@interfaces';
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
  ];

  pagination: Pagination = {
    pageIndex: 0,
    pageSize: 30,
    length: 100
  }

  selectedStateCode: string;

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

  updateState(event){
    this.pagination = {
      pageIndex: 0,
      pageSize: 30,
      length: 100
    }
    this.selectedStateCode = event.value.toLowerCase()
    this.data$ = this.analyticsService.getState(this.selectedStateCode, this.pagination, true);
  }

  changePage(event?: Pagination){
    this.pagination = event || this.pagination;
    this.data$ = this.analyticsService.getState(this.selectedStateCode, this.pagination);
  }
}
