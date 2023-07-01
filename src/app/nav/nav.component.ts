import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../tickets/ticketservice/ticket.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isOnLive = true;

  filteredOptions: Observable<any[]>;

  myControl = new FormControl();

  constructor(private router: Router, private ticketService: TicketService) {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  toggle(): void {
    console.log(this.isOnLive);
  }

  filter(val: string): Observable<any[]> {
    // call the service which makes the http-request
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
