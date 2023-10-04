import {User} from "./user";

export class TicketReply {
  private _ticketReplyBody: string;
  private _user: User;
  private _replyDate: string;
  private _isShowMoreClicked = false;


  get ticketReplyBody(): string {
    return this._ticketReplyBody;
  }

  set ticketReplyBody(value: string) {
    this._ticketReplyBody = value;
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
