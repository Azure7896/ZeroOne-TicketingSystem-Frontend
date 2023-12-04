import { Component } from '@angular/core';
import {RoutingService} from "../../services/routing-service/routing.service";
import {Title} from "@angular/platform-browser";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../classes/user";
import {AuthService} from "../../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home-admin-client',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent {

  user: User;
  constructor(public routingService: RoutingService, private titleService: Title, private userService: UserService, private authService: AuthService, private snackBar: MatSnackBar) {
    this.titleService.setTitle("Client - ZeroOne");
  }

  ngOnInit() {
    this.getUserFromAPI()
  }

  logout() {
    this.authService.logout()
    this.snackBar.open(`Successfully logged out`, "OK", {
      duration: 4000,
    });
    this.routingService.goToPage('/');
  }

  getUserFromAPI() {
    this.userService.getUserData(sessionStorage.getItem('app.username')).subscribe(data => {
        this.user = data;
      },
      err => {

      })
  }
}
