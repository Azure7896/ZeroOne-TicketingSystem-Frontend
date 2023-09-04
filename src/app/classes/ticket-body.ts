export class TicketBody {
  private _id;
  private _ticketBody;


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get ticketBody() {
    return this._ticketBody;
  }

  set ticketBody(value) {
    this._ticketBody = value;
  }
}
