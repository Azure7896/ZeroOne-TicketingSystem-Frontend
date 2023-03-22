import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isNavbarOpen: boolean = false;

  public openNavbar(): void {
    if(this.isNavbarOpen == false) {
      this.isNavbarOpen = true;
    } else {
      this.isNavbarOpen = false;
    }
  }
}
