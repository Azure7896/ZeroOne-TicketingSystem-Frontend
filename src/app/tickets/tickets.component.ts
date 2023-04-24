import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {Ticket} from "../ticket";
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements AfterViewInit {

  ticketList: Ticket[];

  dataSource: any;

  displayedColumns: string[] = ['select', 'ticketNumber', 'name', 'ticketStatus', 'user', 'createdDate', "attendant", "timeToEnd"];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<Ticket>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ticketService: TicketService) {

  }

  ngOnInit() {
    this.fetchTickets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchTickets() {
    this.ticketService.getAllTickets().subscribe(data => {

      this.ticketList = data
      this.dataSource = new MatTableDataSource(this.ticketList)
      console.log('list of tickets', this.ticketList)
    })
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
