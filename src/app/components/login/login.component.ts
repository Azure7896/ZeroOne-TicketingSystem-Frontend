import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router, public sharedService: SharedService, public routingManager: RoutingService) {

  }

  goToRegisterWindow(): void {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }
}
