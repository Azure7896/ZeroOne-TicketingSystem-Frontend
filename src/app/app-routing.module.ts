import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {TicketComponent} from "./components/ticket/ticket.component";
import {AddticketformComponent} from "./components/addticketform/addticketform.component";
import {TicketcreatedComponent} from "./components/ticketcreated/ticketcreated.component";
import {HomeclientComponent} from "./components/homeclient/homeclient.component";
import {TicketClientComponent} from "./components/ticket-client/ticket-client.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'ticketcreated/:x', component: TicketcreatedComponent},
  {path: 'client', component: HomeclientComponent},
  {path: 'client/:clientsideticketnumber', component: TicketClientComponent},
  {path: ':ticketnumber', component: TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
