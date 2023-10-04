import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent {


  constructor(public routingService: RoutingService, private titleService: Title) {
    this.titleService.setTitle("Client - ZeroOne");
  }
}
