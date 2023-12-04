import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "../../classes/ticket";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatusService {


  constructor(private http: HttpClient) {
  }

  getDatabaseStatus(): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8080/databasestatus')
  }

}
