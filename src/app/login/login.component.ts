import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, public sharedService: SharedService) {

  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
  goToRegisterPage(): void {
      this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
    }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
