import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../classes/ticket";
import {TicketsComponent} from "../tickets/tickets.component";
import {FormGroup} from "@angular/forms";
import {TicketSearchDto} from "../classes/ticket-search-dto";
import {TicketReply} from "../classes/ticket-reply";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) {
  }

  getTicket(ticketNumber): Observable<any> {
  return this.http.get<any>('http://localhost:8080/tickets/ticket?ticketnumber=' + ticketNumber);
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets');
  }

  getAllReplies(ticketNumber): Observable<TicketReply[]> {
    return this.http.get<TicketReply[]>('http://localhost:8080/tickets/ticket/replies?ticketnumber=' + ticketNumber)
  }

  getAllTicketsByOldest(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets/byoldest')
  }

  saveTicket(form: FormGroup)  {
    return this.http.post("http://localhost:8080/tickets", form.value, {observe: 'response'})
  }

  replyTicket(ticketNumber, form: FormGroup)  {
    return this.http.post("http://localhost:8080/tickets/ticket/reply?ticketnumber=" + ticketNumber, form.value, {observe: 'response'})
  }
  updateTicketStatus(ticketNumber, status) {
    return this.http.put("http://localhost:8080/tickets/ticket?ticketnumber=" + ticketNumber + "&status=" + status, {observe: 'response'}).subscribe()
  }

  getTicketsToSearch(): Observable<TicketSearchDto[]> {
    return this.http.get<TicketSearchDto[]>('http://localhost:8080/search');
  }
  postCreatedDateAndGetTimeRemaining(createdDate): Observable<string> {
    return this.http.post<string>('http://localhost:8080/search', createdDate);
  }




}
