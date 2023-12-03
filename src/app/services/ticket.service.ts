import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../classes/ticket";
import {FormGroup} from "@angular/forms";
import {TicketSearchDto} from "../classes/ticket-search-dto";
import {TicketReply} from "../classes/ticket-reply";
import {ApiService} from "./api.service";

// const httpOptions = {
//   headers: {
//     Authorization: 'Bearer ' + sessionStorage.getItem('app.token'),
//   },
// };
@Injectable({
  providedIn: 'root'
})

export class TicketService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  getTicket(ticketNumber): Observable<any> {
    return this.http.get<any>(this.apiService.api + '/tickets/ticket?ticketnumber=' + ticketNumber);
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>( this.apiService.api + '/tickets');
  }

  searchTickets(ticketName: String): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiService.api + '/search?ticketname=' + ticketName);
  }

  getAllTicketsByOldest(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiService.api + '/tickets/byoldest')
  }

  saveTicket(form: FormGroup): Observable<Ticket> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Ticket>(this.apiService.api + "/tickets/saveTicket", JSON.stringify(form.value), { headers });
  }
  replyTicket(ticketNumber, form: FormGroup) {
    return this.http.post(this.apiService.api + "/tickets/ticket/reply?ticketnumber=" + ticketNumber, form.value, {observe: 'response'})
  }
  updateTicketStatus(ticketNumber, status) {
    return this.http.put(this.apiService.api + "/tickets/ticket?ticketnumber=" + ticketNumber + "&status=" + status, {observe: 'response'}).subscribe()
  }

  getAllTicketsByStatus(ticketStatus): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiService.api + '/tickets/status?ticketstatus=' + ticketStatus)
  }

}
