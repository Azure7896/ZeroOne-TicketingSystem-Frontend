import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isOnLive = true;



  toggle(): void {
    console.log(this.isOnLive);
    // do more stuff
  }

  constructor(private router:Router) {

  }
  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

}
