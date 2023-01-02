import { Component } from '@angular/core';
import { LocalService } from './local/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polnilnice';

  constructor(private localStore: LocalService) {

  }
}
