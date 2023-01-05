import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { VehiclesComponent } from './vehicles/vehicles/vehicles.component';
import { CreateComponent } from './notifications/create/create.component';
import {NotificationsModule} from "./notifications/module/notifications.module";
import {PolnilniceModule} from "./polnilnice/module/polnilnice.module";
import {FormsModule} from "@angular/forms";
import { Component, OnInit, ViewEncapsulation, NgZone, enableProdMode } from '@angular/core';
import { PolnilniceComponent } from './polnilnice/polnilnice.component';
import { ObvestilaComponent } from './obvestila/obvestila.component';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationsComponent,
    PolnilniceComponent,
    NavbarComponent,
    LoginComponent,
    VehiclesComponent,
    CreateComponent,
    ObvestilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NotificationsModule,
    PolnilniceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
