import {User} from "./user";

export class Ticket {

  ticketNumber: string;
  name: string;
  ticketStatus: string;
  user: User;
  createdDate: string;
  attendant: string;
  timeToEnd: string;
}
