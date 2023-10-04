import { Component } from '@angular/core';
import {Ticket} from "../../classes/ticket";
import {TicketService} from "../../services/ticket.service";
import {RoutingService} from "../../services/routing.service";
import {SharedService} from "../../services/shared.service";
import {Title} from "@angular/platform-browser";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.css']
})

export class ClientTicketsComponent {

  new: Ticket[];
  inProgress: Ticket[];
  closed: Ticket[];
  suspended: Ticket[];

  showLoading: boolean = true;

  loadingFailed = false;



constructor(private ticketService: TicketService, public routingService: RoutingService, private sharedService: SharedService, private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle("My tickets - ZeroOne");
    this.fetchTickets('New');
    this.fetchTickets('In progress');
    this.fetchTickets('Closed');
    this.fetchTickets('Suspended');
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }

  fetchTickets(ticketStatus) {
    this.ticketService.getAllTicketsByStatus(ticketStatus).subscribe(data => {
        setTimeout(() => {
            this.showLoading = false;
            switch(ticketStatus) {
              case 'New':
                this.new = data;
                break;
              case 'In progress':
                this.inProgress = data;
                break;
              case 'Closed':
                this.closed = data;
                break;
              case 'Suspended':
                this.suspended = data;
                break;
            }
          },
          1000);
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

}
