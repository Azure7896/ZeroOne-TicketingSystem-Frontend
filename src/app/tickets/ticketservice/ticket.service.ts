import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../classes/ticket";
import {TicketsComponent} from "../tickets.component";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('http://localhost:8080/tickets');
  }

  public saveTicket(form: FormGroup)  {
    return this.http.post("http://localhost:8080/tickets", form.value, {observe: 'response'})
  }

}
