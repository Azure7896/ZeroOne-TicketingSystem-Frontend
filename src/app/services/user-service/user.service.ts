import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../classes/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(form: FormGroup): Observable<any> {
    return this.http.post(environment.apiUrl + "/users/register", form.value);
  }

  resetPassword(form: FormGroup): Observable<any> {
    return this.http.put(environment.apiUrl + "/users/user/password/reset", form.value);
  }

  getUserData(email): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/users/user?email=' + email);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>( environment.apiUrl + '/users');
  }

}
