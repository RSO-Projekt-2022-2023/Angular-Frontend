import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local/local.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private localService: LocalService) { }

  public isUserLoggedOn(){
    if(this.localService.getData("currentUser") == null){
      return false;
    }
    else{
      return true;
    }
  }


  public signOut(){
    this.localService.clearData();
  }

  ngOnInit(): void {
  }

}
