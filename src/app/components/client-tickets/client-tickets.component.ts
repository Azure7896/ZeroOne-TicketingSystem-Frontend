import { Component } from '@angular/core';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Ticket} from "../../classes/ticket";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";
import {RoutingService} from "../../services/routing.service";
import {MatTableDataSource} from "@angular/material/table";
import {SharedService} from "../../services/shared.service";

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



constructor(private ticketService: TicketService, public routingService: RoutingService, private sharedService: SharedService) {

  }

  ngOnInit() {
    this.fetchTickets('New');
    this.fetchTickets('In progress');
    this.fetchTickets('Closed');
    this.fetchTickets('Suspended');
  }

  folders: Section[] = [
{
  name: 'Photos',
  updated: new Date('1/1/16'),
},
{
  name: 'Recipes',
    updated: new Date('1/17/16'),
},
{
  name: 'Work',
    updated: new Date('1/28/16'),
},
];
notes: Section[] = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  },
];

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
