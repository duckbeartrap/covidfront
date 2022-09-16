import { Injectable } from '@angular/core';
import { Analytics, Pagination } from '@interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay, take } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { TransformService } from '@services';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  usAnalytics$: Observable<Analytics[]> = null;
  stateAnalytics$: Observable<Analytics[]>;
  constructor(private http: HttpClient, private transformService: TransformService) { }

  get(pagination: Pagination): Observable<Analytics[]>{
    if(!this.usAnalytics$) {
      return this.http.get<Analytics[]>(`${environment.API_URL}analytics`).pipe(
        take(1),
        shareReplay(1),
        map((res: any[]) => {
          this.usAnalytics$ = of(res);
          return this.transformService.transformUsData(res, pagination);
        })
      );
    }
    
    return this.usAnalytics$.pipe(
      map((res: any[]) => this.transformService.transformUsData(res, pagination))
    )
  }

  getState(id: string, pagination: Pagination, newState: boolean = false): Observable<Analytics[]>{
    if(!this.stateAnalytics$ || newState) {
      return this.http.get<Analytics[]>(`${environment.API_URL}analytics/${id}`).pipe(
        take(1),
        shareReplay(1),
        map((res: any[]) => {
          this.stateAnalytics$ = of(res);
          return this.transformService.transformStateData(res, pagination);
        })
      );
    }
    
    return this.stateAnalytics$.pipe(
      map((res: any[]) => this.transformService.transformStateData(res, pagination))
    )
  }
}
