import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component'
import {AddticketformComponent} from "../addticketform/addticketform.component";
import {AddticketbyuserformComponent} from "../addticketbyuserform/addticketbyuserform.component";
import {TicketcreatedComponent} from "../ticketcreated/ticketcreated.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addinternalticket', component: AddticketformComponent},
  {path: 'addticket', component: AddticketbyuserformComponent},
  {path: 'ticketcreated/:term', component: TicketcreatedComponent},
  {path: 'menu', component: TicketcreatedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
