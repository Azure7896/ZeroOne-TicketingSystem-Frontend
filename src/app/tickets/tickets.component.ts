import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";
import {interval, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements AfterViewInit {

  ticketList: Ticket[];

  dataSource: any;

  displayedColumns: string[] = ['select', 'ticketNumber', 'name', 'ticketStatus', 'user', 'createdDate', "attendant", "timeToEnd"];
  selection = new SelectionModel<Ticket>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.fetchTickets();
    // setInterval(() => { this.fetchTickets(); }, 5000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchTickets() {
    this.ticketService.getAllTickets().subscribe(data => {
      this.ticketList = data
        this.dataSource = new MatTableDataSource(this.ticketList)
    })
  }

  calculateTime(date) {
    var firstDate = new Date(new Date().toISOString()),
      secondDate = new Date(date),
      firstDateInSeconds = firstDate.getTime() / 1000,
      secondDateInSeconds = secondDate.getTime() / 1000,
      difference = Math.abs(firstDateInSeconds - secondDateInSeconds);
    return difference;
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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
