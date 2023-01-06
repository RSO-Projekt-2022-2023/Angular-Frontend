import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../models/user';
import { WebAppDataServiceService } from '../services/web-app-data-service.service';
import { Router } from '@angular/router';
import { LocalService } from '../local/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private webAppDataService: WebAppDataServiceService,  private router: Router,
    private localService: LocalService) { }


  public userLogin = {
    "username": "",
    "password" : ""
  };

  public message: String = "";

  public login(): void{

    var user = new User;
    user.username = this.userLogin.username;
    user.password = this.userLogin.password;

    this.webAppDataService
      .authentication("users/login", user)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        this.message = napaka.toString();
        return throwError(() => napaka);
      })).subscribe((data) => {
        this.localService.saveData("currentUser", JSON.stringify(data));
        this.router.navigateByUrl("notifications"); 
      });
  }

  ngOnInit(): void {
  }

}

