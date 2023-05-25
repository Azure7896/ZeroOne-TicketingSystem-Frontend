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

  showLoading: boolean = true;

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

        if (data != null) {
          setTimeout(() => {
            this.showLoading = false;
            this.ticketList = data
            this.dataSource = new MatTableDataSource(this.ticketList)
          }, 1500);
        } else {
          // this.fetchTickets() to do
        }
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
