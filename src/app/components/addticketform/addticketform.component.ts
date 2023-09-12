import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tick} from "@angular/core/testing";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {TicketService} from "../../services/ticket.service";
import {RoutingService} from "../../services/routing.service";
import {Ticket} from "../../classes/ticket";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-addticketform',
  templateUrl: './addticketform.component.html',
  styleUrls: ['./addticketform.component.css']
})
export class AddticketformComponent {

  public editor = ClassicEditor;

  replyTicketStatus;

  time = 1;

  ticketName: Ticket;

  ticketForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    ticketBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  })
  protected readonly tick = tick;

  constructor(private ticketService: TicketService, public routingService: RoutingService) {
  }

  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków'
    }
  }

  redirectToTicket(ticketNumber) {
    this.replyTicketStatus = "succesful";
    const interval = setInterval(() => {
      if (this.time === 0) {
        this.replyTicketStatus = null;
        this.routingService.goToPage('client/' + ticketNumber)
        clearInterval(interval);
        this.time = 1;
      }
      this.time--;
    }, 1000);
  }


  replyTicket(): void {
    this.ticketService.saveTicket(this.ticketForm).subscribe(response => {
        this.ticketName = response;
        this.redirectToTicket(this.ticketName.ticketNumber);
      },
      err => {
        this.replyTicketStatus = "fail"
      })
  }
}
