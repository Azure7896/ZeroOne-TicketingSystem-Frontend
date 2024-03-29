import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './components/home-admin/home.component';
import { NavComponent } from './components/navbar/nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ChartComponent } from './components/chart/chart.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { TicketsComponent } from './components/tickets-table/tickets.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FooterComponent } from './components/footer/footer.component';
import { TicketFormComponent } from './components/ticket-form/TicketForm.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {MatMenuModule} from "@angular/material/menu";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './components/loading/loading.component';
import {MatBadgeModule} from "@angular/material/badge";
import {NgChartsModule} from "ng2-charts";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { HomeclientComponent } from './components/home-client/homeclient.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { SortComponent } from './components/sort-table/sort.component';
import {MatChipsModule} from "@angular/material/chips";
import { LoadingFailedComponent } from './components/loading-failed/loading-failed.component';
import { RegisterComponent } from './components/register/register.component';
import { GeneralFailureComponent } from './components/general-failure/general-failure.component';
import { TicketComponent } from './components/specific-ticket/ticket.component';
import { SpecificTicketWindowComponent } from './components/specific-ticket-window/specific-ticket-window.component';
import {MatSelectModule} from "@angular/material/select";
import { TicketClientComponent } from './components/ticket-client/ticket-client.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./routes/app-routing.module";
import { BackgroundVideoComponent } from './components/background-video/background-video.component';
import { ClientTicketsComponent } from './components/client-tickets/client-tickets.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ChartsComponent } from './components/charts/charts.component';
import { FailuresSettingsComponent } from './components/failures-settings/failures-settings.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {AuthInterceptor} from "./auth/auth-interceptor";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import { UserSettingsWindowComponent } from './components/user-settings-window/user-settings-window.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {AuthGuard} from "./auth/auth-guard";
import { ClientSettingsComponent } from './components/client-settings/client-settings.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ChartComponent,
    TicketsComponent,
    FooterComponent,
    TicketFormComponent,
    LoadingComponent,
    HomeclientComponent,
    SortComponent,
    LoadingFailedComponent,
    RegisterComponent,
    GeneralFailureComponent,
    TicketComponent,
    SpecificTicketWindowComponent,
    TicketClientComponent,
    BackgroundVideoComponent,
    ClientTicketsComponent,
    ChartsComponent,
    FailuresSettingsComponent,
    UserSettingsWindowComponent,
    UserSettingsComponent,
    ClientSettingsComponent,
    UsersManagementComponent,
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
    AppRoutingModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    ExtendedModule,
    FlexModule
  ],
  providers: [ AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
