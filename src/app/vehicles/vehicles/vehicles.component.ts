import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { catchError, throwError } from 'rxjs';
import { LocalService } from 'src/app/local/local.service';
import { Vehicle } from 'src/app/models/vehicle';
import { WebAppDataServiceService } from 'src/app/services/web-app-data-service.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private webAppDataService: WebAppDataServiceService, private localService:LocalService,
  private router: Router) { }

  public vehicles: Vehicle[] = []

  public message: String = "Please wait for data to load...";

  public newVehicle = {
    "model" : "",
    "lstCharge": "",
    "numOfChargesLstMonth" : "",
    "numOfKilometers" : "",
    "userId": ""
  }

  private getVehicles(): void{
    var user = JSON.parse(this.localService.getData('currentUser')!);
    this.webAppDataService.getVehiclesForUser("vehicles/user", user.id)
    .pipe(catchError((napaka: HttpErrorResponse) => {
      this.message = napaka.toString();
      return throwError(() => napaka);
    })).subscribe((data) => {
      this.vehicles = data;
      this.message = "";

    });
    
  }

  public deleteVehicle(vehicleId: number): void{
    this.webAppDataService
      .deleteVehicle(vehicleId)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.message = error.toString();
        return throwError(() => error);
      })).subscribe(() => {
        this.message = "Successfully deleted vehicle!"
        var elem: HTMLElement = document.getElementById('message')!;
        elem.setAttribute("style", "color: red")
        this.vehicles.forEach((value, index) => {
          if(value.vehicleId==vehicleId) this.vehicles.splice(index, 1);
        });

      }); 
  }

  public addVehicle() {
    this.webAppDataService
      .addVehicle(this.newVehicle)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.message = error.toString();
        return throwError(() => error);
      })).subscribe((vehicle: Vehicle) => {
        this.message = "Successfully added new vehicle!"
        var elem: HTMLElement = document.getElementById('message')!;
        elem.setAttribute("style", "color: green")
        let vehicles1 = this.vehicles.slice(0);
        vehicles1.push(vehicle);
        this.vehicles = vehicles1;
        
      }); 
  }

  ngOnInit(): void {
    if(this.localService.getData("currentUser") == null){
      this.router.navigateByUrl("home")
    }
    else{
      this.newVehicle.userId = JSON.parse(this.localService.getData("currentUser")!).id;
      console.log(this.newVehicle);
      this.getVehicles();
    }
  }

}
