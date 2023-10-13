export class ChartsData {
  private _ticketsCountByMonth: number[];
  private _ticketsCountByStatus: number[];

  get ticketsCountByMonth(): number[] {
    return this._ticketsCountByMonth;
  }
  get ticketsCountByStatus(): number[] {
    return this._ticketsCountByStatus;
  }

}
