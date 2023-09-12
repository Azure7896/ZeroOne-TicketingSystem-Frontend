import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent {


  constructor(public routingService: RoutingService) {

  }

}
