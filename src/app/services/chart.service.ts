import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) {
  }

  getSortedDaysList(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/chart');
  }
  getTicketsCount(): Observable<any> {
    return this.http.get<string[]>('http://localhost:8080/latst7days');
  }

}

