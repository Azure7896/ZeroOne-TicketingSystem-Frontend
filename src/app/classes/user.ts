export class User {
  private _id;
  private _email;


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}
