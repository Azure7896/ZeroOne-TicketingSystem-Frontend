import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatusService {


  constructor(private http: HttpClient) {
  }

  getDatabaseStatus(): Observable<boolean> {
    return this.http.get<boolean>(environment.apiUrl + '/databasestatus')
  }

}
