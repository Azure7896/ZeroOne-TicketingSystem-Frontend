import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ChartsComponent } from './components/charts/charts.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { TicketsComponent } from './components/tickets/tickets.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterComponent } from './components/footer/footer.component';
import { AddticketformComponent } from './components/addticketform/addticketform.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './components/loading/loading.component';
import {MatBadgeModule} from "@angular/material/badge";
import {NgChartsModule} from "ng2-charts";
import { TicketcreatedComponent } from './components/ticketcreated/ticketcreated.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { HomeclientComponent } from './components/homeclient/homeclient.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SortComponent } from './components/sort/sort.component';
import {MatChipsModule} from "@angular/material/chips";
import { LoadingFailedComponent } from './components/loading-failed/loading-failed.component';
import { RegisterComponent } from './components/register/register.component';
import { GeneralFailureComponent } from './components/general-failure/general-failure.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketWindowComponent } from './components/ticket-window/ticket-window.component';
import {MatSelectModule} from "@angular/material/select";
import { TicketClientComponent } from './components/ticket-client/ticket-client.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BackgroundVideoComponent } from './background-video/background-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ChartsComponent,
    TicketsComponent,
    FooterComponent,
    AddticketformComponent,
    LoadingComponent,
    TicketcreatedComponent,
    MenuComponent,
    HomeclientComponent,
    SortComponent,
    LoadingFailedComponent,
    RegisterComponent,
    GeneralFailureComponent,
    TicketComponent,
    TicketWindowComponent,
    TicketClientComponent,
    BackgroundVideoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    CKEditorModule,
    MatMenuModule,
    HttpClientModule,
    MatBadgeModule,
    NgChartsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
