import {Component, Input} from '@angular/core';
import {TicketService} from "../../services/ticket-service/ticket.service";
import {Ticket} from "../../classes/ticket";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../services/shared-service/shared.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tick} from "@angular/core/testing";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-specific-specific-ticket-window',
  templateUrl: './specific-ticket-window.component.html',
  styleUrls: ['./specific-ticket-window.component.css']
})


export class SpecificTicketWindowComponent {

  ticket: Ticket;

  showLoading: boolean = true;

  loadingFailed = false;

  isShowMoreClicked = false;

  public editor = ClassicEditor;

  refreshed = false;

  progressBarValue = 100;

  timeToRefresh: number = 15;

  private refreshInterval: any;

  replyTicketStatus: string;

  time = 1;

  ticketNumberFromRoute: string;

  protected readonly closed = closed;

  timeToEndCopy;

  roleFromSessionStorage = sessionStorage.getItem('app.roles');

  replyForm = new FormGroup({
    replyBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    userEmail: new FormControl(sessionStorage.getItem('app.username'))
  })

  constructor(public ticketService: TicketService, public sharedService: SharedService, public router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.router.url.includes('client')) {
      this.ticketNumberFromRoute = this.activatedRoute.snapshot.paramMap.get('clientsideticketnumber');
    } else {
      this.ticketNumberFromRoute= this.activatedRoute.snapshot.paramMap.get('ticketnumber');
    }
    this.titleService.setTitle(this.ticketNumberFromRoute.toUpperCase() + " - ZeroOne Ticketing System");
    this.getTicketFromAPI();
    this.startRefreshTimer();
  }

  ngOnDestroy() {
    this.stopRefreshTimer()
  }
  changeTextLength() {
    this.isShowMoreClicked = true;
  }

  getTicketFromAPI() {
    this.ticketService.getTicket(this.ticketNumberFromRoute).subscribe(data => {
        setTimeout(() => {
            this.ticket = data;
            this.showLoading = false;
            this.timeToEndCopy = this.ticket.ticketTimeRemaining;
          },
          1000);
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

  updateTicketStatus(ticketnumber, status) {

    switch (status) {
      case 1:
        this.ticket.ticketStatus = 'In progress';
          this.ticket.ticketTimeRemaining = this.timeToEndCopy;
        break;
      case 2:
        this.ticket.ticketStatus = 'Closed';
        this.ticket.ticketTimeRemaining = '-';
        break;
      case 3:
        this.ticket.ticketStatus = 'Suspended';
        this.ticket.ticketTimeRemaining = '-';
        break;
    }
    this.ticketService.updateTicketStatus(ticketnumber, status);
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }

  reloadTicket() {
    this.ngOnInit();
  }

  showReplyInfo() {
    this.replyTicketStatus = "successful";
    const interval = setInterval(() => {
      if (this.time === 0) {
        this.reloadTicket();
        this.replyTicketStatus = null;
        clearInterval(interval);
        this.time = 1;
      }
      this.time--;
    }, 1000);
  }


  replyTicket(): void {
    this.ticketService.replyTicket(this.ticket.ticketNumber, this.replyForm).subscribe(response => {
        this.showReplyInfo();
        this.stopRefreshTimer()
        this.snackBar.open(`Reply has been added`, "OK", {
          duration: 4000,
        });
      },
      err => {
        this.replyTicketStatus = "fail"
        this.snackBar.open(`Something went wrong`, "OK", {
          duration: 4000,
        });
      })
  }


  refreshTicket() {
    this.ticketService.getTicket(this.ticketNumberFromRoute).subscribe(data => {
      this.ticket = data;
      this.timeToRefresh = 15;
      this.refreshed = true;
      this.progressBarValue = 100;
      setTimeout(() => {
        this.refreshed = false;
      }, 1000);
    }, error => {
      this.showError();
    })}

  refreshTicketManually() {
    this.refreshTicket();
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
          this.progressBarValue-= 6.66;
        } else {
          this.refreshTicket();
          this.progressBarValue = 100;
        }
      }
    }, 1000);
  }


  protected readonly tick = tick;
}

