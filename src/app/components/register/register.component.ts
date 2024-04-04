import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared-service/shared.service";
import {RoutingService} from "../../services/routing-service/routing.service";
import {UserService} from "../../services/user-service/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(320)])
    }
  );

  constructor(public sharedService: SharedService, public routingService: RoutingService, private userService: UserService, private snackBar: MatSnackBar) {

  }

  register(): void {
    this.userService.registerUser(this.registerForm).subscribe(response => {

        this.snackBar.open(`You have registered successfully`, "OK", {
          duration: 5000,
        });

        setTimeout(()=>{
          this.backToLoginPage();
        }, 3000);
      },
      err => {
        this.snackBar.open(`User exists in the database or something went wrong.`, "OK");
      })
    this.registerForm.reset()
  }

  backToLoginPage() {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

}
