import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared-service/shared.service";

@Component({
  selector: 'app-specific-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {


  constructor(public router: Router) {

  }


}
