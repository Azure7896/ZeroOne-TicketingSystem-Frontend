import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FailureInfo} from "../../classes/failure-info";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FailureService {

  constructor(private http: HttpClient) { }

  saveFailure(form: FormGroup) {
    return this.http.post(environment.apiUrl + "/failures/saveFailure", form.value)
  }

  getAllFailures(): Observable<FailureInfo[]> {
    return this.http.get<FailureInfo[]>( environment.apiUrl + '/failures');
  }

  getAllActiveFailures(): Observable<FailureInfo[]> {
    return this.http.get<FailureInfo[]>( environment.apiUrl + '/failures/active');
  }

  updateStatus(failureId) {
    return this.http.put(environment.apiUrl + "/failures/setactive?failureid=" + failureId, {});
  }
}
