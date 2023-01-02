import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../../services/notiifications/notifications.service";
import {Router} from "@angular/router";
import {Notifications} from "../notifications";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  notificationForm: Notifications = {
    created: '',
    description: '',
    notificationId: 10,
    title: '',
  };

  constructor(private notificationService:NotificationsService,
              private router:Router) {}

  ngOnInit(): void {}

  create(){
    this.notificationService.create(this.notificationForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/notifications"])
        },
        error:(err) => {
          console.log(err);
        }
      })
  }
}


