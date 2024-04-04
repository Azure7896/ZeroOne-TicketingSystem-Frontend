import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../classes/ticket";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class TicketService {
  constructor(private http: HttpClient) {
  }

  getTicket(ticketNumber): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/tickets/ticket?ticketnumber=' + ticketNumber);
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>( environment.apiUrl + '/tickets');
  }

  searchTickets(ticketName: String): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiUrl + '/search?ticketname=' + ticketName);
  }

  getAllTicketsByOldest(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiUrl + '/tickets/byoldest')
  }

  getAllTicketsByAttendant(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiUrl + '/tickets/attendant?email=' + sessionStorage.getItem('app.username'))
  }

  getAllTicketsByUser(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiUrl + '/tickets/user?email=' + sessionStorage.getItem('app.username'))
  }

  saveTicket(form: FormGroup): Observable<Ticket> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Ticket>(environment.apiUrl + "/tickets/saveTicket", JSON.stringify(form.value), { headers });
  }
  replyTicket(ticketNumber, form: FormGroup) {
    return this.http.post(environment.apiUrl + "/tickets/ticket/reply?ticketnumber=" + ticketNumber, form.value, {observe: 'response'})
  }
  updateTicketStatus(ticketNumber, status) {
    return this.http.put(environment.apiUrl + "/tickets/ticket?ticketnumber=" + ticketNumber + "&status=" + status, {observe: 'response'}).subscribe()
  }

  getAllTicketsByStatusAndUser(ticketStatus, email): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(environment.apiUrl + '/tickets/status?ticketstatus=' + ticketStatus + '&email=' + email)
  }

}
