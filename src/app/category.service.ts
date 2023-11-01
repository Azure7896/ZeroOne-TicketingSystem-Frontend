import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>( this.apiService.api + '/categories');
  }

}
