import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ApiService} from "../services/api-service/api.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private api: ApiService) {
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
    return this.http.post(this.api.api + "/api/auth", null, httpOptions);
  }

  logout() {
    sessionStorage.removeItem("app.token");
    sessionStorage.removeItem("app.roles");
  }

  isUserInRole(roleFromRoute: string) {
    const roles = sessionStorage.getItem("app.roles");

    if (roles!.includes(",")) {
      if (roles === roleFromRoute) {
        return true;
      }
    } else {
      const roleArray = roles!.split(",");
      for (let role of roleArray) {
        if (role === roleFromRoute) {
          return true;
        }
      }
    }
    return false;
  }

}
