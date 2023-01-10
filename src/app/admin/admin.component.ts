import { Component, OnInit } from '@angular/core';
import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Obvestilo} from "../models/obvestilo";
import {AdminService} from "../services/admin-service.service";
import {Polnilnice} from "../polnilnice/polnilnice";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public message: String = "";
  public novaPolnilnica = {
    "available": "",
    "chargers": "",
    "coord_east": "",
    "coord_north": "",
    "created": ""
  }
  constructor(private adminService: AdminService) { }

  public addPolnilnica() {
    this.adminService
      .addPolnilnice(this.novaPolnilnica)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.message = error.toString();
        return throwError(() => error);
      })).subscribe((obvestilo: Polnilnice) => {
      this.message = "Successfully added new charger!"
      var elem: HTMLElement = document.getElementById('message')!;
      elem.setAttribute("style", "color: green")


    });
  }

  public posljiMail(){
    this.adminService.posljiMail();
  }
  ngOnInit(): void {
  }

}
