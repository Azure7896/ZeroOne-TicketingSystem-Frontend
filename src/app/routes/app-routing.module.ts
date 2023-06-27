import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component'
import {AddticketformComponent} from "../addticketform/addticketform.component";
import {TicketcreatedComponent} from "../ticketcreated/ticketcreated.component";
import {HomeclientComponent} from "../homeclient/homeclient.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addinternalticket', component: AddticketformComponent},
  {path: 'ticketcreated/:term', component: TicketcreatedComponent},
  {path: 'client', component: HomeclientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
