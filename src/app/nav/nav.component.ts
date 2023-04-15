import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isNavbarOpen: boolean = false;

  constructor(private router:Router) {

  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  public openNavbar(): void {
    if(this.isNavbarOpen == false) {
      this.isNavbarOpen = true;
    } else {
      this.isNavbarOpen = false;
    }
  }
}
