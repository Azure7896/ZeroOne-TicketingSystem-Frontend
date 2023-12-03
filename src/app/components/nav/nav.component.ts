import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, map, Observable, share, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";
import {SharedService} from "../../services/shared.service";
import {AuthService} from "../../auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  curDate = new Date().toDateString();

  filteredOptions: Observable<any[]>;

  search = new FormControl();

  constructor(public router: Router, private ticketService: TicketService, public sharedService: SharedService, private authService: AuthService, private snackBar: MatSnackBar) {

    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.getTicketsToSearch(val);
      })
    );
  }

  logout() {
    this.authService.logout();
    this.goToPage("/")
  }

  getTicketsToSearch(query: string): Observable<any[]> {
    return this.ticketService.searchTickets(query).pipe(
      map(response => response.filter(option => {
        return option.name.toLowerCase().indexOf(query.toLowerCase()) === 0;
      }))
    );
  }

  openMenu(): void {
    this.sharedService.isMenuOpen = !this.sharedService.isMenuOpen;
    if (this.sharedService.blockOnLiveButton == true && this.sharedService.refresh == false) {
      this.sharedService.blockOnLiveButton = false;
      this.sharedService.refresh = true;
    }
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

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
