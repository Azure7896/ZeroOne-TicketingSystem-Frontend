import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("app.token") != null;
  }

  login(username: string, password: string): Observable<string> {
    const httpOptions = {
      headers: {
        Authorization: 'Basic ' + window.btoa(username + ':' + password)
      },
      responseType: 'text' as 'text',
    };
    return this.http.post(environment.apiUrl + "/api/auth", null, httpOptions);
  }

  logout() {
    sessionStorage.removeItem("app.token");
    sessionStorage.removeItem("app.roles");
  }

  isUserInRoles(rolesFromRoute: string[] | undefined) {
    const roles = sessionStorage.getItem("app.roles");

    if (roles && rolesFromRoute) {
      const userRoles = roles.split(",");

      const intersection = rolesFromRoute.filter(role => userRoles.includes(role));

      return intersection.length > 0;
    }

    return false;
  }

}
