import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing-service/routing.service";
import {SharedService} from "../../services/shared-service/shared.service";

@Component({
  selector: 'app-specific-ticket-client',
  templateUrl: './ticket-client.component.html',
  styleUrls: ['./ticket-client.component.css']
})
export class TicketClientComponent {

  constructor(public routingService: RoutingService, sharedService: SharedService) {

  }

}
