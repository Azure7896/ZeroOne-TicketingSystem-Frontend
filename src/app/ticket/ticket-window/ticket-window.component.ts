import { Component } from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Ticket} from "../../classes/ticket";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ticket-window',
  templateUrl: './ticket-window.component.html',
  styleUrls: ['./ticket-window.component.css']
})
export class TicketWindowComponent {

  ticket: Ticket;
  constructor(public ticketService: TicketService, public router: Router) {

  }

  ngOnInit() {
    this.getTicketFromAPI();
  }
  getTicketFromAPI() {
    this.ticketService.getTicket(this.router.url.substring(1)).subscribe(data => {
            this.ticket = data;
      },
      err => {
        // this.showError()
        // this.sharedService.error = err;
      })
  }

}
