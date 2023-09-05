import {Component} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Ticket} from "../../classes/ticket";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {delay, interval, Observable, takeWhile} from "rxjs";

@Component({
  selector: 'app-ticket-window',
  templateUrl: './ticket-window.component.html',
  styleUrls: ['./ticket-window.component.css']
})
export class TicketWindowComponent {

  ticket: Ticket;
  showLoading: boolean = true;
  loadingFailed = false;
  timeRemaining: string;
  interval;
  xd: Observable<any>

  constructor(public ticketService: TicketService, public router: Router, public sharedService: SharedService) {
  }

  ngOnInit() {
    this.getTicketFromAPI();
    this.refreshTicket();
  }

  getTicketFromAPI() {
    this.ticketService.getTicket(this.router.url.substring(1)).subscribe(data => {
      setTimeout(() => {
        this.ticket = data;
        this.showLoading = false;
        this.ticket.ticketStatus = 'Closed'
        },
        1000);
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

  refreshTicket() {
    interval(10000).subscribe(value => {
      this.ticketService.getTicket(this.router.url.substring(1)).subscribe(data => {
          this.ticket.ticketStatus = 'Closed'
          this.ticket = data;
          console.warn('test');
        },
        err => {
          this.showError()
          this.sharedService.error = err;
        })
    })
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }


}
