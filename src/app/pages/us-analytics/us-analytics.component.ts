import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsService } from '@services';
import { Analytics, Pagination } from '@interfaces';
@Component({
  selector: 'app-us-analytics',
  templateUrl: './us-analytics.component.html',
  styleUrls: ['./us-analytics.component.scss']
})
export class UsAnalyticsComponent implements OnInit {
  data$: Observable<Analytics[]>;
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
  ];

  pagination: Pagination = {
    pageIndex: 0,
    pageSize: 30,
    length: 100
  }


  constructor(private analyticsService: AnalyticsService){}

  ngOnInit(){
    this.changePage();
  }

  changePage(event?: Pagination){
    this.pagination = event || this.pagination;
    this.data$ = this.analyticsService.get(this.pagination);
  }

}
