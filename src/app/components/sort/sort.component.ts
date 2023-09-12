import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {SharedService} from "../../services/shared.service";

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})


export class SortComponent {


  constructor(public sharedService: SharedService) {

  }

  sortByOldest() {

  }
}
