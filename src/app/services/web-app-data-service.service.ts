import { Inject, Injectable } from '@angular/core';
import { Observable, retry, catchError, ObservedValueOf } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class WebAppDataServiceService {

  private apiUrl = "http://localhost:8080/v1";
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

  public authentication(url1: string, user: User): Observable<User> {
    const url: string = `${this.apiUrl}/${url1}`;
    return this.http
    .post<User>(url, user)
    .pipe(retry(1), catchError(this.handleError))
  };

  public getVehiclesForUser(url1: string, userId: number): Observable<Vehicle[]> {
    const url: string = `${this.apiUrl}/${url1}/${userId}`;
    return this.http
    .get<Vehicle[]>(url)
    .pipe(retry(1), catchError(this.handleError))

  }

  public addVehicle(vehicle: Object): Observable<Vehicle> {
    const url: string = `${this.apiUrl}/vehicles`;
    return this.http
    .post<Vehicle>(url, vehicle)
    .pipe(retry(1), catchError(this.handleError))
  };

  public deleteVehicle(vehicleId: number): Observable<Object> {
    const url: string = `${this.apiUrl}/vehicles/${vehicleId}`;
    return this.http
    .delete<Object>(url, this.httpHeader)
    .pipe(retry(1), catchError(this.handleError))
  };

}
