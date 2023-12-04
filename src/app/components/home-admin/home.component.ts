import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SharedService} from "../../services/shared-service/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private titleService: Title, public sharedService: SharedService, public router: Router) {
    this.titleService.setTitle("ZeroOne Ticketing System");
  }

}
