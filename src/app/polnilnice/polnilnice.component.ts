import { Component, OnInit } from '@angular/core';
import { Polnilnice } from './polnilnice';
import { PolnilniceService } from "../services/polnilnice/polnilnice.service";
import { Search } from './search';

@Component({
  selector: 'app-vehicles',
  templateUrl: './polnilnice.component.html',
  styleUrls: ['./polnilnice.component.css']
})
export class PolnilniceComponent implements OnInit {

  searchForm: Search = {
    coord_north: '',
    coord_east: ''
  };

  
  allPolnilnice: Polnilnice[] = [];
  public searchedPolnilnica: any;
  public odgovor = "";
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

  search(): void{
    console.log("Searching polnilnice");
    // console.log(this.searchForm);
    let searchString = "curr_coord="+this.searchForm.coord_north+","+this.searchForm.coord_east;
    console.log(searchString);
    this.polnilniceService.search(searchString).subscribe((data) => {
      this.searchedPolnilnica = data;
      console.log(data);
      let minId = 0;
      let minDistance = 999999999999999999999;
      for (let i=0; i < this.searchedPolnilnica.length; i++) {
        if (this.searchedPolnilnica[i].distance < minDistance) {
          minId = i;
          minDistance = this.searchedPolnilnica[i].distance;
        }
      }
      let minStreet = this.searchedPolnilnica[minId].street;
      let minCity = this.searchedPolnilnica[minId].city;
      let minAvailable = this.searchedPolnilnica[minId].available;
      let minTime = this.searchedPolnilnica[minId].time;
      this.odgovor = "Nearest charging station is " + minDistance + "km away, " +
                    "has " + minAvailable + " chargers still available and is located on " +
                    minStreet + ", " + minCity + ". It will take you about " + Math.round(minTime/60) +
                    " minutes to get there!"
      console.log(this.odgovor);
    });
  }

}
