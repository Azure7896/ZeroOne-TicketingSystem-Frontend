import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {Ticket} from "../classes/ticket";
import {TicketService} from "./ticketservice/ticket.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {

  ticketList: Ticket[];

  dataSource: any;

  showLoading: boolean = true;

  timeLeft: number = 30;

  interval;

  wasRefreshed = false;


  displayedColumns: string[] = ['select', 'ticketNumber', 'name', 'ticketStatus', 'user', 'createdDate', "attendant", "timeToEnd"];
  selection = new SelectionModel<Ticket>(true, []);
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }
  constructor(private ticketService: TicketService) {

  }

  ngOnInit() {
    // setInterval(() => { this.fetchTickets(); }, 5000);
    this.fetchTickets()
    this.timer()
  }

  fetchTickets() {
      this.ticketService.getAllTickets().subscribe(data => {
        setTimeout(() =>
          {
            this.showLoading = false;
            this.ticketList = data
            this.dataSource = new MatTableDataSource(this.ticketList);
          },
          1000);
      })
  }

  refreshTickets() {
    this.ticketService.getAllTickets().subscribe(data => {
      this.dataSource.data = data;
    })}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  timer(): void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        this.wasRefreshed = true;
        this.refreshTickets()
        setTimeout( () => {
          this.wasRefreshed = false;
        }, 2000)
        this.timeLeft = 32;
      }
    },1000)
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Ticket): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticketNumber + 1}`;
  }
}

