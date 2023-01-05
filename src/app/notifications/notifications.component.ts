import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../services/notiifications/notifications.service";
import {Notifications} from "./notifications";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  allNotifications: Notifications[] = [];








  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.notificationsService.get().subscribe((data) => {
      this.allNotifications = data;
      console.log(this.allNotifications);
      console.log("sem v get");
    });
  }


}
