import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  registerUser(registrerData: FormGroup) {
    return this.http.post(this.apiService.api + "/users/register", registrerData.value, {observe: 'response'})
  }
}
