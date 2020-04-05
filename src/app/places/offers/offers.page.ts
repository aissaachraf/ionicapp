import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private placeservice: PlacesService,private router: Router) { }
offers: Place[];
  ngOnInit() {

this.offers = this.placeservice.offers;

  }
onedit(offerid: string, slidingitem: IonItemSliding){
slidingitem.close();
this.router.navigate(['/','places','tabs','offers','edit',offerid]);
console.log(offerid);

}
}
