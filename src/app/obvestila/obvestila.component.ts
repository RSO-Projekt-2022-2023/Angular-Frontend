import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { catchError, throwError } from 'rxjs';
import { LocalService } from 'src/app/local/local.service';
import { Obvestilo } from 'src/app/models/obvestilo';
import { WebAppDataServiceService } from 'src/app/services/web-app-data-service.service';
import {ObvestilaService} from "../services/obvestila-service.service";
import {Vehicle} from "../models/vehicle";

@Component({
  selector: 'app-obvestila',
  templateUrl: './obvestila.component.html',
  styleUrls: ['./obvestila.component.css']
})
export class ObvestilaComponent implements OnInit {

  constructor(private obvestilaService: ObvestilaService, private localService:LocalService,
              private router: Router) { }

  public obvestila: Obvestilo[] = []


  dan = "01";
  mesec = "03";
  leto = "2022";


  ura = "15";
  minuta = "36";
  sekunda = "38";



  public datum = ""+this.leto+"-"+this.mesec+"-"+this.dan+"T"+this.ura+":"+this.minuta+":"+this.sekunda+"Z";




  public message: String = "Please wait for data to load...";

  public novoObvestilo = {
    "title" : "",
    "created": "",
    "description" : ""
  }

  private getObvestila(): void{

    this.obvestilaService.getVsaObvestila("")
      .pipe(catchError((napaka: HttpErrorResponse) => {
        this.message = napaka.toString();
        return throwError(() => napaka);
      })).subscribe((data) => {
      this.obvestila = data;
      this.message = "";

    });

  }

  public deleteObvestilo(obvestiloId: number): void{
    this.obvestilaService
      .deleteObvestilo(obvestiloId)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.message = error.toString();
        return throwError(() => error);
      })).subscribe(() => {
      this.message = "Successfully deleted vehicle!"
      var elem: HTMLElement = document.getElementById('message')!;
      elem.setAttribute("style", "color: red")
      this.obvestila.forEach((value, index) => {
        if(value.notificationId==obvestiloId) this.obvestila.splice(index, 1);
      });

    });
  }

  public addObvestilo() {
    this.obvestilaService
      .addObvestilo(this.novoObvestilo)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.message = error.toString();
        return throwError(() => error);
      })).subscribe((obvestilo: Obvestilo) => {
      this.message = "Successfully added new vehicle!"
      var elem: HTMLElement = document.getElementById('message')!;
      elem.setAttribute("style", "color: green")
      let vehicles1 = this.obvestila.slice(0);
      vehicles1.push(obvestilo);
      this.obvestila = vehicles1;

    });
  }

  ngOnInit(): void {
  //   if(this.localService.getData("currentUser") == null){
  //     this.router.navigateByUrl("home")
  //   }
  //   else{
  //     this.newVehicle.userId = JSON.parse(this.localService.getData("currentUser")!).id;
  //     console.log(this.newVehicle);
  //     this.getVehicles();
  //   }
    this.getObvestila();

  }

}
