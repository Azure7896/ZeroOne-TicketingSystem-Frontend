import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import {TicketComponent} from "../components/ticket/ticket.component";
import {AddticketformComponent} from "../components/addticketform/addticketform.component";
import {HomeclientComponent} from "../components/homeclient/homeclient.component";
import {TicketClientComponent} from "../components/ticket-client/ticket-client.component";
import {LoginComponent} from "../components/login/login.component";
import {ClientTicketsComponent} from "../components/client-tickets/client-tickets.component";
import {ChartsComponent} from "../components/charts/charts.component";
import {FailureSettingComponent} from "../components/failure-setting/failure-setting.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'failure', component: FailureSettingComponent},
  {path: 'client/addticket', component: AddticketformComponent},
  {path: 'client', component: HomeclientComponent},
  {path: 'client/tickets', component: ClientTicketsComponent},
  {path: 'client/:clientsideticketnumber', component: TicketClientComponent},
  {path: ':ticketnumber', component: TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
