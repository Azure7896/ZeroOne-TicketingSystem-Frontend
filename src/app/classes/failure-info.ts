export class FailureInfo {

  private _id;

  private _failureTitle;

  private _failureStart;

  private _failureEnd;

  private _additionalInfo;

  private _active: boolean;


  get id() {
    return this._id;
  }

  get failureTitle() {
    return this._failureTitle;
  }

  get failureStart() {
    return this._failureStart;
  }

  get failureEnd() {
    return this._failureEnd;
  }

  get additionalInfo() {
    return this._additionalInfo;
  }

  get active(): boolean {
    return this._active;
  }
}
