import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing.service";
import {Title} from "@angular/platform-browser";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent {

  user: User;
  constructor(public routingService: RoutingService, private titleService: Title, private userService: UserService) {
    this.titleService.setTitle("Client - ZeroOne");
  }

  ngOnInit() {
    this.getUserFromAPI()
  }

  getUserFromAPI() {
    this.userService.getUserData(sessionStorage.getItem('app.username')).subscribe(data => {
        this.user = data;
      },
      err => {

      })
  }
}
