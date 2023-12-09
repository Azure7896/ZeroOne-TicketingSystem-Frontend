import {Role} from "../role";

export class User {
  private _email;
  private _password;
  private _firstName;
  private _lastName;
  private _isDisabled;
  private _createdDate;
  private _role: Role;


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

  get createdDate() {
    return this._createdDate;
  }

  set createdDate(value) {
    this._createdDate = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }
}
