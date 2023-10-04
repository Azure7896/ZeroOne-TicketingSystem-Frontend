import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {SharedService} from "../../services/shared.service";
import {RoutingService} from "../../services/routing.service";
import {StatusService} from "../../services/status.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  databaseWorking = false;

  serverWorking = false;

  databaseStatus = "Database status: Inactive";

  serverStatus = "Server status: Inactive";

  constructor(private router: Router, public sharedService: SharedService, public routingManager: RoutingService, private statusService: StatusService) {

  }

  ngOnInit() {
    this.getDatabaseStatus();
  }

  goToRegisterWindow(): void {
    this.sharedService.isOnLoginPage = !this.sharedService.isOnLoginPage;
  }

  getDatabaseStatus() {
    this.statusService.getDatabaseStatus().subscribe(data => {
        setTimeout(() =>
          {
            this.serverWorking = true;
            this.serverStatus = "Server status: Active";

            this.databaseWorking = data;
            if (this.databaseWorking) {
              this.databaseStatus = "Database status: Active";
            }
          },
          1750);
      },
      err => {

      })
  }
}
