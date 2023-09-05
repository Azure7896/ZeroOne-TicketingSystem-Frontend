import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {


  constructor(public router: Router) {
  }

  showLoading: boolean = true;

  loadingFailed = false;

}
