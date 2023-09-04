import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../classes/ticket";
import {TicketsComponent} from "../tickets/tickets.component";
import {FormGroup} from "@angular/forms";
import {TicketSearchDto} from "../classes/ticket-search-dto";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) {
  }

  getTicket(ticketNumber): Observable<Ticket> {
  return this.http.get<Ticket>('http://localhost:8080/tickets/ticket?ticketnumber=' + ticketNumber);
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets');
  }

  getAllTicketsByOldest(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets/byoldest')
  }

  saveTicket(form: FormGroup)  {
    return this.http.post("http://localhost:8080/tickets", form.value, {observe: 'response'})
  }

  getTicketsToSearch(): Observable<TicketSearchDto[]> {
    return this.http.get<TicketSearchDto[]>('http://localhost:8080/search');
  }



}
