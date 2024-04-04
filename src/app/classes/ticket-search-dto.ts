export class TicketSearchDto {
  private _name;
  private _ticketNumber

  get name() {
    return this._name;
  }

  get ticketNumber() {
    return this._ticketNumber;
  }

  set name(value) {
    this._name = value;
  }

  set ticketNumber(value) {
    this._ticketNumber = value;
  }
}
