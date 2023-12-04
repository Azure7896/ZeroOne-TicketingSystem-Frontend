import {Component} from '@angular/core';
import {ChartService} from "../../services/chart-service/chart.service";
import {RoutingService} from "../../services/routing-service/routing.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  constructor(private chartService: ChartService, public routingService: RoutingService) {
    this.addDaysListToChart();
    this.addTicketCountToChart();
  }

  lineChartLabels: any[];
  lineChartType = 'line';
  lineChartData: any[];

  addDaysListToChart() {
    this.chartService.getSortedDaysList().subscribe(data => {
      this.lineChartLabels = data;
    })
  }

  addTicketCountToChart() {
    this.chartService.getTicketsCount().subscribe(data => {
      this.lineChartData = [
        {
          data: data,
          label: 'Number of tickets-table per day',
          backgroundColor: '#FFFFFF',
          borderColor: "rgba(10,150,132,1)",
          pointBackgroundColor: '#FFFFFF'
        }
      ];
    });
  }

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

}
