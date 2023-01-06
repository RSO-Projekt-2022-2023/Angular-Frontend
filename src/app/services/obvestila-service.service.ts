import { Inject, Injectable } from '@angular/core';
import { Observable, retry, catchError, ObservedValueOf } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';
import {Obvestilo} from "../models/obvestilo";
import {environment} from "../../environments/environment.enej";

@Injectable({
  providedIn: 'root'
})
export class ObvestilaService {

  private apiUrl = "http://20.82.85.106/notification/v1/notifications";
  constructor(private http: HttpClient) { }
  private httpHeader = {
    headers: new HttpHeaders({
      'access-control-allow-origin' : "*"
    })
  };


  private handleError(error1: any): Promise<any> {
    console.log('There was an error', error1.error["message"] || error1.error.errmsg || error1);
    return Promise.reject(error1.error["message"]|| error1.error.errmsg || error1);
  }


  public getVsaObvestila(url1: string): Observable<Obvestilo[]> {
    const url: string = `${this.apiUrl}`;
    return this.http
      .get<Obvestilo[]>(url)
      .pipe(retry(1), catchError(this.handleError))

  }

  public addObvestilo(obvestilo: Object): Observable<Obvestilo> {
    const url: string = `${this.apiUrl}`;
    return this.http
      .post<Obvestilo>(url, obvestilo)
      .pipe(retry(1), catchError(this.handleError))
  };
  public deleteObvestilo(obvestiloId: number): Observable<Object> {
    const url: string = `${this.apiUrl}/${obvestiloId}`;
    return this.http
      .delete<Object>(url, this.httpHeader)
      .pipe(retry(1), catchError(this.handleError))
  };

}
