import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, interval, map, Observable, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../../services/ticket-service/ticket.service";
import {SharedService} from "../../services/shared-service/shared.service";
import {AuthService} from "../../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MenuItem} from "../../menu-item";
import {UserService} from "../../services/user-service/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  filteredOptions: Observable<any[]>;

  search = new FormControl();

  user: User;

  currentDate: Date;
  currentTime: Date;


  constructor(public router: Router, private ticketService: TicketService, public sharedService: SharedService, private authService: AuthService, private snackBar: MatSnackBar, private userService: UserService) {

    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.getTicketsToSearch(val);
      })
    );
  }

  menuItems: MenuItem[] = [
    {
      label: 'Client page',
      icon: 'face',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/client'
    },
    {
      label: 'Charts',
      icon: 'bar_chart',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/charts'
    },
    {
      label: 'Users Management',
      icon: 'supervised_user_circle',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: 'test'
    },
    {
      label: 'Failures',
      icon: 'warning',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/failure'
    },
    {
      label: 'Settings',
      icon: 'settings',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      route: '/settings'
    },
    {
      label: 'Logout',
      icon: 'login',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      route: '/'
    },
  ];

  logout() {
    this.authService.logout();
    this.snackBar.open(`Successfully logged out`, "OK", {
      duration: 4000,
    });
  }

  getTicketsToSearch(query: string): Observable<any[]> {
    return this.ticketService.searchTickets(query).pipe(
      map(response => response.filter(option => {
        return option.name.toLowerCase().indexOf(query.toLowerCase()) === 0;
      }))
    );
  }

  toggle(): void {
    if (this.sharedService.refresh) {
      this.snackBar.open(`Refresh option disabled`, "OK", {
        duration: 4000,
      });
    } else {
      this.snackBar.open(`Refresh option enabled`, "OK", {
        duration: 4000,
      });
    }
    this.sharedService.refresh = !this.sharedService.refresh;
  }

  ngOnInit(): void {
    this.getUserFromAPI();
    this.updateDateTime();
    // Update the time every second
    interval(1000).subscribe(() => {
      this.updateDateTime();
    });
  }

  private updateDateTime(): void {
    this.currentDate = new Date();
    this.currentTime = new Date();
}

  goToPage(pageName: string): void {
    console.log(`Navigating to: ${pageName}`);
    this.router.navigate([`${pageName}`]);
    if (pageName === "/") {
      this.logout();
    }
  }

  getUserFromAPI() {
    this.userService.getUserData(sessionStorage.getItem('app.username')).subscribe(data => {
        this.user = data;
      },
      err => {

      })
  }
}
