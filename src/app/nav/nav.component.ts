import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../tickets/ticketservice/ticket.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  curDate= new Date().toDateString();

  isOnLive = true;

  filteredOptions: Observable<any[]>;

  myControl = new FormControl();

  constructor(private router: Router, private ticketService: TicketService, public service: SharedService) {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  openMenu() :void {
    this.service.isMenuOpen = !this.service.isMenuOpen;
  }

  toggle(): void {
    this.service.refresh = !this.service.refresh;
  }

  filter(val: string): Observable<any[]> {
    return this.ticketService.getTicketsToSearch()
      .pipe(
        map(response => response.filter(option => {
          return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
        }))
      )
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);

  }


}
