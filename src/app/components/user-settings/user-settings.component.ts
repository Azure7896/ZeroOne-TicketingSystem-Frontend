import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoutingService} from "../../services/routing-service/routing.service";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {

  replyTicketStatus;

  user: User;


  changePasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    // ticketBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    // category: new FormControl(),
    userEmail: new FormControl(sessionStorage.getItem('app.username'))
  })


  constructor (public routingService: RoutingService, private titleService: Title, private snackBar: MatSnackBar, private userService: UserService) {
    this.titleService.setTitle("User settings - ZeroOne");
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
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków'
    }
  }

  // redirectToTicket(ticketNumber) {
  //   this.replyTicketStatus = "succesful";
  //   const interval = setInterval(() => {
  //     if (this.time === 0) {
  //       this.replyTicketStatus = null;
  //       this.routingService.goToPage('client/' + ticketNumber)
  //       clearInterval(interval);
  //       this.time = 1;
  //     }
  //     this.time--;
  //   }, 1000);
  // }

  // getCategoriesFromAPI() {
  //   this.categoryService.getAllCategories().subscribe(data => {
  //       this.categories = data;
  //     },
  //     err => {
  //
  //     })
  // }

  // setCategory(category: string) {
  //   this.category = category;
  //   this.ticketForm.get('category').setValue(this.category)
  // }
  //
  //
  // createNewTicket(): void {
  //   this.ticketService.saveTicket(this.ticketForm).subscribe(response => {
  //       this.ticketName = response;
  //       this.snackBar.open(`Ticket has been added`, "OK", {
  //         duration: 4000,
  //       });
  //       this.redirectToTicket(this.ticketName.ticketNumber);
  //     },
  //     err => {
  //       this.snackBar.open(`Something went wrong`, "OK", {
  //         duration: 4000,
  //       });
  //       this.replyTicketStatus = "fail"
  //     })
  // }
}
