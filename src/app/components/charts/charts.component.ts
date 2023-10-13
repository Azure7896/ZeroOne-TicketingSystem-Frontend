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

  chartsData: ChartsData;

  doughnutChartLabels: any[] = [];
  doughnutChartType = 'doughnut';
  doughnutChartData: any[] = [];


  barChartLabels: any[] = [];
  barChartType = 'bar';
  barChartData: any[] = [];

  ngOnInit() {
    this.getChartsData();
  }

  fillCharts(chartsData: ChartsData) {
    this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.barChartData = [
      {
        data: this.chartsData.ticketsCountByMonth,
        label: 'Number of tickets per month',
        backgroundColor: '#0080ff', //
        borderColor: '#0080ff', //
      }
    ];
    this.doughnutChartLabels = ['New', 'Open', 'Closed', 'Suspended'];
    this.doughnutChartData = [
      { data: this.chartsData.ticketsCountByStatus,
        label: 'Number of tickets',
        backgroundColor: ['#FFA500', '#00D8FF','#4ECCA3', '#B4B4B3'],
        borderColor: '#232931' },
    ];
    this.doughnutChartType = 'doughnut';
  }
  getChartsData() {
    this.chartService.getChartsData().subscribe(charts => {
      this.chartsData = charts;
      this.fillCharts(this.chartsData)
    });
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
