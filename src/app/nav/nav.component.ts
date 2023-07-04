import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {TicketService} from "../tickets/ticketservice/ticket.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isOnLive = true;

  filteredOptions: Observable<any[]>;

  myControl = new FormControl();

  constructor(private router: Router, private ticketService: TicketService, private service: SharedService) {

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
    if (this.service.isMenuOpen) {
      this.service.isMenuOpen = false;
    } else {
      this.service.isMenuOpen = true;
    }
  }

  toggle(): void {
    console.log(this.isOnLive);
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
