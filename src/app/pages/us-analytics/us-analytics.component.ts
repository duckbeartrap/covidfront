import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsService } from '@services';

@Component({
  selector: 'app-us-analytics',
  templateUrl: './us-analytics.component.html',
  styleUrls: ['./us-analytics.component.scss']
})
export class UsAnalyticsComponent implements OnInit {
  data$: Observable<any>;
  columns: string[] = [
    'cases',
    'negative',
    'positive',
    'hospitalizedCur',
    'recovered',
    'deaths',
    'totalTests'
  ];
  topColumns: string[] = [
    'totalCases',
    'tests',
    'hospitalized',
    'outcomes',
    'totalTestResults'
  ]

  constructor(private analyticsService: AnalyticsService){}

  ngOnInit(){
    this.data$ = this.analyticsService.get();
  }

}
