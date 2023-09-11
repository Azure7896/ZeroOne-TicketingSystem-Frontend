import {Component} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Ticket} from "../../classes/ticket";
import {Router} from "@angular/router";
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

  responseStatus;

  ticketReplyList: TicketReply[];

  public editor = ClassicEditor;

  replyForm = new FormGroup({
    replyBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
  })

  constructor(public ticketService: TicketService, public router: Router, public sharedService: SharedService) {
  }

  ngOnInit() {
    this.getTicketFromAPI();
    // this.refreshTicket();
    this.fetchReplies();
  }

  changeTextLength() {
    this.isShowMoreClicked = true;
  }

  getTicketFromAPI() {
    this.ticketService.getTicket(this.router.url.substring(1)).subscribe(data => {
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
      this.ticketService.getTicket(this.router.url.substring(1)).subscribe(data => {
          this.ticket = data;
          console.warn('test');
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

  replyTicket(): void {
    this.ticketService.replyTicket(this.ticket.ticketNumber, this.replyForm).subscribe(response => {
      this.responseStatus = response.status;
    });
  }

  fetchReplies() {
    this.ticketService.getAllReplies(this.router.url.substring(1)).subscribe(data => {
        this.ticketReplyList = data;
        console.warn("hehe")
      },
      err => {
        this.showError()
        this.sharedService.error = err;
      })
  }

}
