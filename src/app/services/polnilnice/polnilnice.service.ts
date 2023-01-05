import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Polnilnice} from "../../polnilnice/polnilnice";



@Injectable({

  providedIn: 'root'

})

export class PolnilniceService {

  private url = 'http://20.82.85.106/polnilnica/v1/polnilnice/';
  private url2 = 'http://20.82.85.106/iskanje/v1/search/';

  public coords: any;

  constructor(private httpClient: HttpClient) { }


  create(payload: Polnilnice) {
    return this.httpClient.post<Polnilnice>(this.url, payload);
  }
  get(){
    return this.httpClient.get<Polnilnice[]>(this.url);
  }

  search(coords: string) {
    return this.httpClient.get(this.url2 + coords);
  }

}
