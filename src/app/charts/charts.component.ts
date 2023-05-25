import { Component } from '@angular/core';
import {Color} from "chart.js";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  lineChartData = [
    { data: [12, 5, 42, 18, 36, 45, 47], label: 'Number of tickets' },
  ];
  lineChartLabels=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(78, 204, 163, 1)',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';

}
