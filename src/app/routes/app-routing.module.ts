import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home-admin/home.component';
import {TicketComponent} from "../components/specific-ticket/ticket.component";
import {TicketFormComponent} from "../components/ticket-form/TicketForm.component";
import {HomeclientComponent} from "../components/home-client/homeclient.component";
import {TicketClientComponent} from "../components/ticket-client/ticket-client.component";
import {LoginComponent} from "../components/login/login.component";
import {ClientTicketsComponent} from "../components/client-tickets/client-tickets.component";
import {ChartsComponent} from "../components/charts/charts.component";
import {FailureSettingComponent} from "../components/failure-setting/failure-setting.component";
import {UserSettingsComponent} from "../components/user-settings/user-settings.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'failure', component: FailureSettingComponent},
  {path: 'client/addticket', component: TicketFormComponent},
  {path: 'settings', component: UserSettingsComponent},
  {path: 'client', component: HomeclientComponent},
  {path: 'client/tickets-table', component: ClientTicketsComponent},
  {path: 'client/:clientsideticketnumber', component: TicketClientComponent},
  {path: ':ticketnumber', component: TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
