export class User {
  private _email;
  private _password;
  private _firstName;
  private _lastName;
  private _isDisabled;


  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get isDisabled() {
    return this._isDisabled;
  }

  set isDisabled(value) {
    this._isDisabled = value;
  }
}
