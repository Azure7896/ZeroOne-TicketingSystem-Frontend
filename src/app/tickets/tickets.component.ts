import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {Ticket} from "../classes/ticket";
import {TicketService} from "../services/ticket.service";
import {SharedService} from "../services/shared.service";
import {Router} from "@angular/router";

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

  loadingFailed = false;

  interval;

  wasRefreshed = false;


  displayedColumns: string[] = ['select', 'ticketNumber', 'name', 'ticketStatus', 'user', 'createdDate', "attendant", "timeToEnd"];
  selection = new SelectionModel<Ticket>(true, []);

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }


  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  constructor(private ticketService: TicketService, public sharedService: SharedService, public router: Router) {

  }

  getTicketsByOldest() {
    this.ticketService.getAllTicketsByOldest().subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      this.showError()
    })
  }

  getTicketsByNewest() {
    this.refreshTickets();
  }

  ngOnInit() {
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
      },
        err => {
          this.showError()
          this.sharedService.error = err;
        })
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }
  refreshTickets() {
    this.ticketService.getAllTickets().subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      this.showError()
    })}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  timer(): void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 1 && this.sharedService.refresh) {
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

