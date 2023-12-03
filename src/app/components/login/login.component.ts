import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";
import {StatusService} from "../../services/status.service";
import {AuthService} from "../../auth.service";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64)], ),
  password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(320)])
  });

  databaseWorking = false;

  serverWorking = false;

  databaseStatus = "Database status: Inactive";

  serverStatus = "Server status: Inactive";

  constructor(private router: Router, public sharedService: SharedService, public routingService: RoutingService, private statusService: StatusService, private authService: AuthService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getDatabaseStatus();
    this.logToServerConsole();
  }


  public login(): void {
    sessionStorage.removeItem("app.token");

    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe({
        next: (token) => {
          sessionStorage.setItem("app.token", token);

          const decodedToken = jwtDecode<JwtPayload>(token);

          sessionStorage.setItem("app.username", decodedToken.sub);
          // @ts-ignore
          sessionStorage.setItem("app.roles", decodedToken.scope);
          this.snackBar.open(`You have logged in successfully`, "OK", {
            duration: 5000,
          });
          setTimeout(() => {
            this.router.navigateByUrl("/home")
          }, 1000);
        },
        error: (error) => this.snackBar.open(`Login failed: ${error.status}`, "OK")
      });
  }


  goToRegisterWindow(): void {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

  private logToServerConsole() {

  }

  getDatabaseStatus() {
    this.statusService.getDatabaseStatus().subscribe(data => {
            this.serverWorking = true;
            this.serverStatus = "Server status: Active";

            this.databaseWorking = data;
            if (this.databaseWorking) {
              this.databaseStatus = "Database status: Active";
            }
      },
      err => {

      })
  }
}
