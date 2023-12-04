import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Ticket} from "../../classes/ticket";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "../api-service/api.service";
import {FailureInfo} from "../../classes/failure-info";

@Injectable({
  providedIn: 'root'
})
export class FailureService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  saveFailure(form: FormGroup) {
    return this.http.post(this.apiService.api + "/failures/saveFailure", form.value)
  }

  getAllFailures(): Observable<FailureInfo[]> {
    return this.http.get<FailureInfo[]>( this.apiService.api + '/failures');
  }

  getAllActiveFailures(): Observable<FailureInfo[]> {
    return this.http.get<FailureInfo[]>( this.apiService.api + '/failures/active');
  }

  updateStatus(failureId) {
    return this.http.put(this.apiService.api + "/failures/setactive?failureid=" + failureId, {});
  }
}
