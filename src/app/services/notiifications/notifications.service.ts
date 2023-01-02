import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment.enej";
import {Notifications} from "../../notifications/notifications";



@Injectable({

  providedIn: 'root'

})

export class NotificationsService {

  //private url = 'http://20.82.85.106/notifications/v1/notifications';

  private url = environment.notificationsBaseUrl;



  constructor(private httpClient: HttpClient) { }


  create(payload: Notifications) {
    return this.httpClient.post<Notifications>(this.url, payload);
  }
  get(){

    return this.httpClient.get<Notifications[]>(this.url);

  }



}
