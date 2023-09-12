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

  isOnLive = true;

  filteredOptions: Observable<any[]>;

  navigationExtras: NavigationExtras = {
    replaceUrl: true // Ustaw replaceUrl na true, aby wymusić ponowne załadowanie
  };

  search = new FormControl();
  protected readonly share = share;

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

    ngOnInit(){}

  openMenu(): void {
    this.sharedService.isMenuOpen = !this.sharedService.isMenuOpen;
  }

  toggle(): void {
    this.sharedService.refresh = !this.sharedService.refresh;
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
