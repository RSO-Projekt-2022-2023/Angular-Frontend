import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LocalService } from 'src/app/local/local.service';
import { User } from 'src/app/models/user';
import { WebAppDataServiceService } from 'src/app/services/web-app-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private webAppDataService: WebAppDataServiceService,  private router: Router,
    private localService: LocalService) { }


  public userRegister = {
    "username": "",
    "password" : "",
    "email": "",
    "firstName": "",
    "lastName": ""
  };

  public message: String = "";

  public register(): void{

    var user = new User;
    user.username = this.userRegister.username;
    user.password = this.userRegister.password;
    user.email = this.userRegister.email;
    user.firstName = this.userRegister.firstName;
    user.lastName = this.userRegister.lastName;

    this.webAppDataService
      .register(user)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        this.message = napaka.toString();
        return throwError(() => napaka);
      })).subscribe((data) => {
        this.localService.saveData("currentUser", JSON.stringify(data));
        this.router.navigateByUrl("home"); 
      });
  }

  ngOnInit(): void {
  }

}
