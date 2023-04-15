import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {AddticketformComponent} from "./addticketform/addticketform.component";

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'addticket', component: AddticketformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
