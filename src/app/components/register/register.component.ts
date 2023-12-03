import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";
import {UserService} from "../../services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

// export function passwordMatchValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const password = control.get('password');
//     const repeatPassword = control.get('repeatPassword');
//
//     if (password && repeatPassword && password.value !== repeatPassword.value) {
//       return {passwordMismatch: true};
//     }
//
//     return null;
//   };
// }
//

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerInfo;

  registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(320)])
    }
  );

  constructor(public sharedService: SharedService, public routingService: RoutingService, private userService: UserService) {

  }

  register(): void {
    this.userService.registerUser(this.registerForm).subscribe(response => {
        this.registerInfo = "Account registered successfully, email sent."

        setTimeout(()=>{
          this.backToLoginPage();
        }, 3000);
      },
      err => {
        this.registerInfo = "This email exists in the database. Try again";
      })
    this.registerForm.reset()
  }

  backToLoginPage() {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

}
