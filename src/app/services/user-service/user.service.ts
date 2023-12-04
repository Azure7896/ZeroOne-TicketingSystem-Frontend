import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api-service/api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  registerUser(form: FormGroup): Observable<any> {
    return this.http.post(this.apiService.api + "/users/register", form.value);
  }

  getUserData(email): Observable<any> {
    return this.http.get<any>(this.apiService.api + '/users/user?email=' + email);
  }

}
