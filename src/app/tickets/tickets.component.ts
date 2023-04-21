import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";

export interface PeriodicElement {
  // position: number;
  ticketNumber: string;
  name: string;
  ticketStatus: string;
  userName: string;
  createdDate: string;
  attendant: string;
  timeToEnd: string;

}
const ELEMENT_DATA: PeriodicElement[] = [

  {ticketNumber: "ZO-123", name: 'Coś nie działa', userName: "Jan Kowalski", ticketStatus: "Nowy", createdDate: "03.04.2023, 14:58", attendant: "Tomasz Nowak", timeToEnd: "23:45"},
  {ticketNumber: "ZO-123", name: 'Coś nie działa', userName: "Jan Kowalski", ticketStatus: "Nowy", createdDate: "03.04.2023, 14:58", attendant: "Tomasz Nowak", timeToEnd: "23:45"},
  {ticketNumber: "ZO-123", name: 'Coś nie działa', userName: "Jan Kowalski", ticketStatus: "Nowy", createdDate: "03.04.2023, 14:58", attendant: "Tomasz Nowak", timeToEnd: "23:45"},
  {ticketNumber: "ZO-123", name: 'Coś nie działa', userName: "Jan Kowalski", ticketStatus: "Nowy", createdDate: "03.04.2023, 14:58", attendant: "Tomasz Nowak", timeToEnd: "23:45"},
  {ticketNumber: "ZO-123", name: 'Coś nie działa', userName: "Jan Kowalski", ticketStatus: "Nowy", createdDate: "03.04.2023, 14:58", attendant: "Tomasz Nowak", timeToEnd: "23:45"},

];



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'ticketNumber', 'name', 'ticketStatus', 'userName', 'createdDate', "attendant", "timeToEnd"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticketNumber + 1}`;
  }



}
