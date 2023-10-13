import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(public routingService: RoutingService) {
  }

}
