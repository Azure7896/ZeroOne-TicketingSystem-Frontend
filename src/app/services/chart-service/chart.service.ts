import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChartsData} from "../../classes/charts-data";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) {
  }

  getSortedDaysList(): Observable<string[]> {
    return this.http.get<string[]>(environment.apiUrl + '/chart');
  }
  getTicketsCount(): Observable<any> {
    return this.http.get<string[]>(environment.apiUrl + '/latst7days');
  }

  getChartsData(): Observable<ChartsData> {
    return this.http.get<ChartsData>(environment.apiUrl + '/charts');
  }
}

