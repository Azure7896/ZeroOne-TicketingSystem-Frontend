import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ChartsComponent } from './charts/charts.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { TicketsComponent } from './tickets/tickets.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterComponent } from './footer/footer.component';
import { AddticketformComponent } from './addticketform/addticketform.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './loading/loading.component';
import {MatBadgeModule} from "@angular/material/badge";
import {NgChartsModule} from "ng2-charts";
import { TicketcreatedComponent } from './ticketcreated/ticketcreated.component';
import { MenuComponent } from './menu/menu.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { HomeclientComponent } from './homeclient/homeclient.component';
import { ClientmenuComponent } from './clientmenu/clientmenu.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SortComponent } from './sort/sort.component';
import {MatChipsModule} from "@angular/material/chips";
import { LoadingFailedComponent } from './loading-failed/loading-failed.component';
import { RegisterComponent } from './register/register.component';
import { GeneralFailureComponent } from './general-failure/general-failure.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketWindowComponent } from './ticket/ticket-window/ticket-window.component';
import {MatSelectModule} from "@angular/material/select";
import { TicketWindowTextEditorComponent } from './ticket-window-text-editor/ticket-window-text-editor.component';

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
    ClientmenuComponent,
    SortComponent,
    LoadingFailedComponent,
    RegisterComponent,
    GeneralFailureComponent,
    TicketComponent,
    TicketWindowComponent,
    TicketWindowTextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
