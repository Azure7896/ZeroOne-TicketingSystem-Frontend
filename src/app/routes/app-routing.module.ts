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
import {FailuresSettingsComponent} from "../components/failures-settings/failures-settings.component";
import {AuthGuard} from "../auth/auth-guard";
import {ClientSettingsComponent} from "../components/client-settings/client-settings.component";
import {UserSettingsComponent} from "../components/user-settings/user-settings.component";
import {UsersManagementComponent} from "../components/users-management/users-management.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN']}},
  {path: 'charts', component: ChartsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN']}},
  {path: 'users-management', component: UsersManagementComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN']}},
  {path: 'failure', component: FailuresSettingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN']}},
  {path: 'client/addticket', component: TicketFormComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  {path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN']}},
  {path: 'client', component: HomeclientComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'client/tickets-table', component: ClientTicketsComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  {path: 'client/settings', component: ClientSettingsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_USER']}},
  {path: 'client/:clientsideticketnumber', component: TicketClientComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_USER', 'ROLE_ADMIN']}},
  {path: ':ticketnumber', component: TicketComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
