import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "./ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url: string;

  constructor(private http: HttpClient) {
    this.url='http://localhost:8080/';
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url);
  }

}
