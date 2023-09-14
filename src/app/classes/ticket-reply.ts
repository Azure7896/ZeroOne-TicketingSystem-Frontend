import {User} from "./user";

export class TicketReply {
  private _ticketReply: string;
  private _user: User;
  private _replyDate: string;
  private _isShowMoreClicked = false;


  get ticketReply(): string {
    return this._ticketReply;
  }

  set ticketReply(value: string) {
    this._ticketReply = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get replyDate(): string {
    return this._replyDate;
  }

  set replyDate(value: string) {
    this._replyDate = value;
  }

  get isShowMoreClicked(): boolean {
    return this._isShowMoreClicked;
  }

  set isShowMoreClicked(value: boolean) {
    this._isShowMoreClicked = value;
  }
}
