import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tick} from "@angular/core/testing";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {TicketService} from "../../services/ticket.service";
import {RoutingService} from "../../services/routing.service";
import {Ticket} from "../../classes/ticket";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {Category} from "../../classes/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-addticketform',
  templateUrl: './addticketform.component.html',
  styleUrls: ['./addticketform.component.css']
})
export class AddticketformComponent {

  public editor = ClassicEditor;

  replyTicketStatus;

  time = 1;

  ticketName: Ticket;

  categories: Category[];

  category: string = "Category: Not selected";

  ticketForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    ticketBody: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    category: new FormControl(),
  })


  protected readonly tick = tick;

  constructor(private ticketService: TicketService, public routingService: RoutingService, private titleService: Title, private categoryService: CategoryService) {
    this.titleService.setTitle("Add ticket - ZeroOne");
  }

  ngOnInit() {
    this.getCategoriesFromAPI();
  }

  getErrorMessage(field): string {
    if (field.hasError('required')) {
      return 'Pole jest puste, podaj wartość';
    } else {
      return 'Niepoprawna ilość znaków'
    }
  }

  redirectToTicket(ticketNumber) {
    this.replyTicketStatus = "succesful";
    const interval = setInterval(() => {
      if (this.time === 0) {
        this.replyTicketStatus = null;
        this.routingService.goToPage('client/' + ticketNumber)
        clearInterval(interval);
        this.time = 1;
      }
      this.time--;
    }, 1000);
  }

  getCategoriesFromAPI() {
    this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
      },
      err => {

      })
  }

  setCategory(category: string) {
    this.category = category;
    this.ticketForm.get('category').setValue(this.category)
  }


  createNewTicket(): void {
    this.ticketService.saveTicket(this.ticketForm).subscribe(response => {
        this.ticketName = response;
        this.redirectToTicket(this.ticketName.ticketNumber);
      },
      err => {
        this.replyTicketStatus = "fail"
      })
  }
}
