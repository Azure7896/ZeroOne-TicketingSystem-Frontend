import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {Ticket} from "../../classes/ticket";
import {TicketService} from "../../services/ticket.service";
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {

  ticketsList: Ticket[];

  dataSource: any;

  timeToRefresh: number = 30;

  showLoading: boolean = true;

  loadingFailed = false;

  private refreshInterval: any;

  refreshed = false;

  displayedColumns: string[] = ['ticketNumber', 'name', 'ticketStatus', 'user', 'createdDate', "attendant", "category", "ticketTimeRemaining" ];

  selection = new SelectionModel<Ticket>(true, []);

  progressBarValue = 100;

  constructor(private ticketService: TicketService, public sharedService: SharedService, public router: Router, public matsnackbar: MatSnackBar) {

  }
  // openSnackBar() {
  //   this.matSnackBar.openFromComponent(PopupComponent, {
  //     duration: 500,
  //   });
  // }

  showSnackBar() {
    this.matsnackbar.open('To jest przykładowy Snackbar', 'Zamknij', {
      duration: 3000,
    });
  }

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  ngOnInit() {
    this.fetchTicketsOnInit()
    this.startRefreshTimer()
  }

  ngOnDestroy() {
    this.stopRefreshTimer();
  }


  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  sortTicketsByOldest() {
    this.ticketService.getAllTicketsByOldest().subscribe(data => {
      this.dataSource.data = data;
      this.sharedService.refresh = false;
      this.sharedService.blockOnLiveButton = true;
    }, error => {
      this.showError()
    })
  }

  sortTicketsByNewest() {
    this.fetchTicketsAgain();
    this.sharedService.refresh = true;
    this.sharedService.blockOnLiveButton = false;
  }


  fetchTicketsOnInit() {
      this.ticketService.getAllTickets().subscribe(data => {
        setTimeout(() =>
          {
            this.showLoading = false;
            this.ticketsList = data
            this.dataSource = new MatTableDataSource(this.ticketsList);
          },
          1000);
      },
        err => {
          this.showError()
          this.sharedService.error = err;
        })
  }

  fetchTicketsAgain() {
    this.ticketService.getAllTickets().subscribe(tickets => {
      this.dataSource.data = tickets;
    }, error => {
      this.showError();
    })
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }

  refreshTickets() {
    this.ticketService.getAllTickets().subscribe(tickets => {
      this.dataSource.data = tickets;
      this.timeToRefresh = 30;
      this.refreshed = true;
      this.progressBarValue = 100;
      setTimeout(() => {
        this.refreshed = false;
      }, 1000);
    }, error => {
      this.showError();
    })}

  refreshTicketsManually() {
    this.refreshTickets();
    this.sharedService.refresh = true;
    this.sharedService.blockOnLiveButton = false;
  }


  private stopRefreshTimer() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  private startRefreshTimer() {
    this.refreshInterval = setInterval(() => {
      if (this.sharedService.refresh) {
        if (this.timeToRefresh > 0) {
          this.timeToRefresh--;
          this.progressBarValue-= 3.33;
        } else {
          this.refreshTickets();
          this.progressBarValue = 100;
        }
      }
    }, 1000);
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

