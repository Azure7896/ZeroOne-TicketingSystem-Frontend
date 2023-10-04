import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, map, Observable, share, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  curDate = new Date().toDateString();

  filteredOptions: Observable<any[]>;

  search = new FormControl();

  constructor(public router: Router, private ticketService: TicketService, public sharedService: SharedService) {

    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.getTicketsToSearch(val);
      })
    );
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
    this.sharedService.refresh = !this.sharedService.refresh;
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
