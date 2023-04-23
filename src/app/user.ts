export class User {
  private _id;
  private _name;


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get getName() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
