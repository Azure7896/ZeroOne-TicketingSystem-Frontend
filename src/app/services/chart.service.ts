import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {ChartsData} from "../classes/charts-data";
import {ChartsComponent} from "../components/charts/charts.component";


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  getSortedDaysList(): Observable<string[]> {
    return this.http.get<string[]>(this.apiService.api + '/chart');
  }
  getTicketsCount(): Observable<any> {
    return this.http.get<string[]>(this.apiService.api + '/latst7days');
  }

  getChartsData(): Observable<ChartsData> {
    return this.http.get<ChartsData>(this.apiService.api + '/charts');
  }
}

