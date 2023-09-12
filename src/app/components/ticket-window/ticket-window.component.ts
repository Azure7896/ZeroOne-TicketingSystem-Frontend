import {Component, Input} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Ticket} from "../../classes/ticket";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {interval} from "rxjs";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketReply} from "../../classes/ticket-reply";

@Component({
  selector: 'app-ticket-window',
  templateUrl: './ticket-window.component.html',
  styleUrls: ['./ticket-window.component.css']
})


export class TicketWindowComponent {

  ticket: Ticket;
  showLoading: boolean = true;

  loadingFailed = false;

  isShowMoreClicked = false;

  ticketBody: string;

  ticketReplyList: TicketReply[];

  public editor = ClassicEditor;

  public readonly: boolean = true;

  replyTicketStatus: string;

  time = 1;

  ticketNumberFromRoute: string;

  replyForm = new FormGroup({
    replyBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  })

  constructor(public ticketService: TicketService, public sharedService: SharedService, public router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.router.url.includes('client')) {
      this.ticketNumberFromRoute = this.activatedRoute.snapshot.paramMap.get('clientsideticketnumber');
    } else {
      this.ticketNumberFromRoute= this.activatedRoute.snapshot.paramMap.get('ticketnumber');
    }
    console.warn(this.ticketNumberFromRoute);
    this.getTicketFromAPI();
    // this.refreshTicket();
    this.fetchReplies();
  }

  changeTextLength() {
    this.isShowMoreClicked = true;
  }

  getTicketFromAPI() {
    this.ticketService.getTicket(this.ticketNumberFromRoute).subscribe(data => {
        setTimeout(() => {
            this.ticket = data;
            this.showLoading = false;
            this.ticketBody = this.ticketBody = this.ticket.ticketBody.ticketBody.substring(0, 500);
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
        break;
      case 2:
        this.ticket.ticketStatus = 'Closed';
        break;
      case 3:
        this.ticket.ticketStatus = 'Suspended';
        break;
    }
    this.ticketService.updateTicketStatus(ticketnumber, status);
  }

  refreshTicket() {
    interval(10000).subscribe(value => {
      this.ticketService.getTicket(this.ticketNumberFromRoute).subscribe(data => {
          this.ticket = data;
        },
        err => {
          this.showError()
          this.sharedService.error = err;
        })
    })
  }

  showError() {
    this.loadingFailed = true;
    this.showLoading = false;
  }

  reloadTicket() {
    this.ngOnInit();
  }

  showReplyInfo() {
    this.replyTicketStatus = "succesful";
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
      },
      err => {
        this.replyTicketStatus = "fail"
      })
  }

  fetchReplies() {
    this.ticketService.getAllReplies(this.ticketNumberFromRoute).subscribe(data => {
        this.ticketReplyList = data;
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }
}

