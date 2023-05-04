import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tick} from "@angular/core/testing";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {config} from "rxjs";
import {TicketService} from "../ticket.service";
@Component({
  selector: 'app-addticketform',
  templateUrl: './addticketform.component.html',
  styleUrls: ['./addticketform.component.css']
})
export class AddticketformComponent {

   public editor = ClassicEditor;

   responseStatus;

ticketForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    ticketBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  })

  constructor(private ticketService: TicketService) {
  }
  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków'
    }
  }

  createNewTicket(): void {
    this.ticketService.saveTicket(this.ticketForm).subscribe(response => {
      this.responseStatus = response.status;
      console.warn(this.responseStatus);
    });
  }

  protected readonly tick = tick;
}
