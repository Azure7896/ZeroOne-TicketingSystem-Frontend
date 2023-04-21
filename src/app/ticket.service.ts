import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "./ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets');
  }

}
