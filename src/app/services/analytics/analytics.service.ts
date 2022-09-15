import { Injectable } from '@angular/core';
import { Analytics } from '@interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  get(): Observable<Analytics[]>{
    return this.http.get<Analytics[]>(`${environment.API_URL}analytics`).pipe(
      map((res: any[]) => {
        const data: Analytics[] = res.map( 
          ({cases, date, outcomes, states, testing}) => {
            return <Analytics> {
              cases: cases.total.value,
              negative: testing.total.value - cases.total.value,
              positive: cases.total.value,
              hospitalizedCur: outcomes.hospitalized.currently.value,
              hospitalizedCul: null, 
              icuCur: outcomes.hospitalized.in_icu.currently.value,
              icuCul: null,
              ventCur: outcomes.hospitalized.on_ventilator.currently.value,
              ventCul: null,
              recovered: cases.total.value - outcomes.hospitalized.currently.value - outcomes.death.total.value,
              deaths: outcomes.death.total.value,
              totalTests: testing.total.value
            }
          }
        );

        return data;
      })
    )
  }

  getState(id: string): Observable<Analytics[]>{
    return this.http.get<Analytics[]>(`${environment.API_URL}analytics/${id}`).pipe(
      map((res: any[]) => {
        const data: Analytics[] = res.map( 
          ({cases, date, outcomes, state, tests}) => {
            return <Analytics> {
              cases: cases.total.value || 0,
              negative: (tests.pcr.total.value - cases.total.value) || 0,
              positive: cases.total.value || 0,
              hospitalizedCur: outcomes.hospitalized.currently.value || 0,
              hospitalizedCul: null, 
              icuCur: outcomes.hospitalized.in_icu.currently.value || 0,
              icuCul: null,
              ventCur: outcomes.hospitalized.on_ventilator.currently.value || 0,
              ventCul: null,
              recovered: outcomes.recovered.value || 0,
              deaths: outcomes.death.total.value || 0,
              totalTests: tests.pcr.total.value || 0
            }
          } 
        );

        return data;
      })
    )
  }
}
