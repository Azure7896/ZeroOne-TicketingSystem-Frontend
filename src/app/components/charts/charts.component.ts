import { Component } from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {ChartsData} from "../../classes/charts-data";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  constructor(private chartService: ChartService) {
  }

  doughnutChartLabels = ['New', 'Open', 'Closed'];
  doughnutChartData = [
    { data: [12, 5, 42], label: 'Number of tickets',
      backgroundColor: ['#FFA500', '#00D8FF','#4ECCA3'],
      borderColor: '#232931' },
  ];
  doughnutChartType = 'doughnut';

  chartsData: ChartsData;

  barChartLabels: any[] = [];
  barChartType = 'bar';
  barChartData: any[] = [];

  ngOnInit() {
    this.getChartsData();
  }

  getChartsData() {
    this.chartService.getChartsData().subscribe(charts => {
      this.chartsData = charts;
      this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      this.barChartData = [
        {
          data: this.chartsData.ticketCountByMonth,
          label: 'Number of tickets per month',
          backgroundColor: '#FFA500', // Kolor tła słupków
          borderColor: '#FFA500', // Kolor obramowania słupków
        }
      ];
    });
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
