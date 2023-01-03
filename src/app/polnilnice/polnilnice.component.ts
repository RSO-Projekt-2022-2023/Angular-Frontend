import { Component, OnInit } from '@angular/core';
import { Polnilnice } from './polnilnice';
import { PolnilniceService } from "../services/polnilnice/polnilnice.service";


@Component({
  selector: 'app-vehicles',
  templateUrl: './polnilnice.component.html',
  styleUrls: ['./polnilnice.component.css']
})
export class PolnilniceComponent implements OnInit {

  
  allPolnilnice: Polnilnice[] = [];
  constructor(private polnilniceService: PolnilniceService) {}
  
  ngOnInit(): void {
    this.get();
  }

  get(): void{
    console.log("Getting polnilnice");
    this.polnilniceService.get().subscribe((data) => {
      this.allPolnilnice = data;
      console.log(this.allPolnilnice);
    });
    
  }

}
