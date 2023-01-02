import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './notifications/create/create.component';
import {NotificationsModule} from "./notifications/module/notifications.module";
import {FormsModule} from "@angular/forms";
import { Component, OnInit, ViewEncapsulation, NgZone, enableProdMode } from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationsComponent,
    NavbarComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NotificationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
