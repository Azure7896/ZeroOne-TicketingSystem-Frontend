import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router:Router, public sharedService: SharedService) {

  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  backToLoginPage() {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

  nameFormControl = new FormControl('', [Validators.required]);
  surnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  repeatPasswordFormControl = new FormControl('', [Validators.required]);

}
