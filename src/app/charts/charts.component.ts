import {AfterViewInit, Component} from '@angular/core';
import {ChartService} from "./service/chart.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    this.addDaysListToChart();
  }


  addDaysListToChart() {
    this.chartService.getSortedDaysList().subscribe(data => {
      this.lineChartLabels = data;
    })
  }

  lineChartData = [
    { data: [12, 5, 42, 18, 36, 45, 47],
      label: 'Number of tickets per day',
      backgroundColor: '#FFFFFF',
      borderColor: "rgba(10,150,132,1)",
      pointBackgroundColor: '#FFFFFF'}];

  lineChartLabels;
  lineChartType = 'line';

  // doughnutChartLabels = ['New', 'Open', 'Closed'];
  // doughnutChartData = [
  //   { data: [12, 5, 42], label: 'Number of tickets',
  //     backgroundColor: ['#FFA500', '#00D8FF','#4ECCA3'],
  //     borderColor: '#232931' },
  // ];
  // doughnutChartType = 'doughnut';
  //
  //
  options = {
    "responsive": true,
    "maintainAspectRatio": false,
  }
  //
  // barChartLabels= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // barChartType= 'bar';
  // barChartData= [
  //   { data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33],
  //     label: 'Number of tickets per month',
  //     backgroundColor: '#6495ED'}
  // ];
}
