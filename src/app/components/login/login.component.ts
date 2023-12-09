import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared-service/shared.service";
import {RoutingService} from "../../services/routing-service/routing.service";
import {StatusService} from "../../services/status-service/status.service";
import {AuthService} from "../../auth/auth.service";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64)],),
    password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(320)])
  });

  databaseWorking = false;

  serverWorking = false;

  databaseStatus = "Database status: Inactive";

  serverStatus = "Server status: Inactive";

  constructor(private router: Router, public sharedService: SharedService, public routingService: RoutingService, private statusService: StatusService, private authService: AuthService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.redirectWhenLoggedIn()
    this.getDatabaseStatus();
    this.logToServerConsole();
  }

  redirectAfterLogin(role) {
    if (role === "ROLE_ADMIN") {
      this.router.navigateByUrl("/home")
    } else {
      this.router.navigateByUrl("/client")
    }
  }

  redirectWhenLoggedIn() {
    if (sessionStorage.getItem("app.roles") == "ROLE_ADMIN") {
      this.router.navigateByUrl("/home")
    } else if ((sessionStorage.getItem("app.roles") == "ROLE_USER")){
      this.router.navigateByUrl("/client")
    }
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
            // @ts-ignore
            this.redirectAfterLogin(decodedToken.scope)
          }, 1000);
        },
        error: (error) => this.snackBar.open(`Wrong credentials or account is inactive`, "OK")
      });
  }


  goToRegisterWindow(): void {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
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

  private logToServerConsole() {

  }
}
