import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

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

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
}
