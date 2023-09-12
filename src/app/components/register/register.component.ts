import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nameFormControl = new FormControl('', [Validators.required]);
  surnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  repeatPasswordFormControl = new FormControl('', [Validators.required]);

  constructor(public sharedService: SharedService, public routingService: RoutingService) {

  }

  backToLoginPage() {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

}
