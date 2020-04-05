import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-booking',
  templateUrl: './place-booking.page.html',
  styleUrls: ['./place-booking.page.scss'],
})
export class PlaceBookingPage implements OnInit {
place: Place;
  constructor(private placeservice: PlacesService , private activroute: ActivatedRoute, private navcontrol: NavController) { }

  ngOnInit() {
    this.activroute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('placeId')) {
this.navcontrol.navigateBack('/places/tabs/offers');
return;


     }
     this.place = this.placeservice.getplaces(paramMap.get('placeId'));

    }


      );
  }
  onofferback() {

this.navcontrol.navigateBack(['/places/tabs/offers']);

  }
}
