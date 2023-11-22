import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";
import {StatusService} from "../../services/status.service";

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

  constructor(private router: Router, public sharedService: SharedService, public routingService: RoutingService, private statusService: StatusService) {
  }

  ngOnInit() {
    this.getDatabaseStatus();
    this.logToServerConsole();
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
