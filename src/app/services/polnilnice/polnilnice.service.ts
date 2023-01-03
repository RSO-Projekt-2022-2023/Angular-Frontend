import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Polnilnice} from "../../polnilnice/polnilnice";



@Injectable({

  providedIn: 'root'

})

export class PolnilniceService {

  private url = 'http://localhost:8080/v1/polnilnice/';

  constructor(private httpClient: HttpClient) { }


  create(payload: Polnilnice) {
    return this.httpClient.post<Polnilnice>(this.url, payload);
  }
  get(){

    return this.httpClient.get<Polnilnice[]>(this.url);

  }



}
