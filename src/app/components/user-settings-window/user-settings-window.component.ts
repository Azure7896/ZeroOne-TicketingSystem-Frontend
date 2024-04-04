import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoutingService} from "../../services/routing-service/routing.service";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-user-settings-window',
  templateUrl: './user-settings-window.component.html',
  styleUrls: ['./user-settings-window.component.css']
})
export class UserSettingsWindowComponent {

  user: User;


  changePasswordForm = new FormGroup({
    email: new FormControl(sessionStorage.getItem('app.username')),
    password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(320)]),
  })

  constructor(public routingService: RoutingService, private titleService: Title, private snackBar: MatSnackBar, private userService: UserService) {
    this.titleService.setTitle("User settings - ZeroOne");
  }

  changePassword(): void {
    this.userService.resetPassword(this.changePasswordForm).subscribe(response => {

        this.snackBar.open(`Password reset successfully`, "OK", {
          duration: 5000,
        });

      },
      err => {
        this.snackBar.open(`Something went wrong, try again.`, "OK");
      })
    this.changePasswordForm.reset()
  }

  getUserFromAPI() {
    this.userService.getUserData(sessionStorage.getItem('app.username')).subscribe(data => {
        this.user = data;
      },
      err => {

      })
  }

  ngOnInit() {
    this.getUserFromAPI()
  }

  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Password is required';
    } else {
      return 'Password is too short'
    }
  }

}
