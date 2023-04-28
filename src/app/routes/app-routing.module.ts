import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component'
import {AddticketformComponent} from "../addticketform/addticketform.component";
import {AddticketbyuserformComponent} from "../addticketbyuserform/addticketbyuserform.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addinternalticket', component: AddticketformComponent},
  {path: 'addticket', component: AddticketbyuserformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
