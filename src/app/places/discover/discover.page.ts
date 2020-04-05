import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import {SegmentChangeEventDetail} from '@ionic/core'
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private placeservice: PlacesService) { }
loadedplaces: Place[] = [];
loadedplacesrended: Place[] = [];
  ionViewWillEnter() {
  this.loadedplaces = this.placeservice.places;
  //console.log(this.loadedplaces[0].title);
}


  ngOnInit() {
    this.loadedplaces = this.placeservice.places;
    this.loadedplacesrended = this.loadedplaces.slice(1);
    //console.log(this.loadedplaces[0].title);
    //console.log(this.loadedplaces[0].imgUrl);
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
console.log(event.detail);

  }
}
