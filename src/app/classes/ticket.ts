import {User} from "./user";
import {TicketBody} from "./ticket-body";
import {TicketReply} from "./ticket-reply";
import {Category} from "./category";


export class Ticket {

  private _ticketNumber: string;
  private _name: string;
  private _ticketStatus: string;
  private _user: User;
  private _createdDate: string;
  private _attendant: User;
  private _ticketTimeRemaining: string;
  private _ticketBody: TicketBody;
  private _ticketReplies: TicketReply[]
  private _category: Category;


  get ticketNumber(): string {
    return this._ticketNumber;
  }

  set ticketNumber(value: string) {
    this._ticketNumber = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get ticketStatus(): string {
    return this._ticketStatus;
  }

  set ticketStatus(value: string) {
    this._ticketStatus = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get createdDate(): string {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get attendant(): User {
    return this._attendant;
  }

  set attendant(value: User) {
    this._attendant = value;
  }

  get ticketTimeRemaining(): string {
    return this._ticketTimeRemaining;
  }

  set ticketTimeRemaining(value: string) {
    this._ticketTimeRemaining = value;
  }

  get ticketBody(): TicketBody {
    return this._ticketBody;
  }

  set ticketBody(value: TicketBody) {
    this._ticketBody = value;
  }

  get ticketReplies(): TicketReply[] {
    return this._ticketReplies;
  }

  set ticketReplies(value: TicketReply[]) {
    this._ticketReplies = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }
}
