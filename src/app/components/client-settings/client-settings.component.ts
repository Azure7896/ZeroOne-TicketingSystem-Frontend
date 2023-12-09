import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing-service/routing.service";

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.css']
})
export class ClientSettingsComponent {

  constructor(public routingService: RoutingService) {
  }
}
