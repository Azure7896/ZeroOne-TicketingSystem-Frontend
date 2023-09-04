import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public router: Router, private titleService: Title, public sharedService: SharedService) {
    this.titleService.setTitle("ZeroOne Ticketing System");
  }

}
