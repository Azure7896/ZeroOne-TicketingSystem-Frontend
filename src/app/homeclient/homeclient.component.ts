import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent {


  constructor(public router: Router) {
  }

}
