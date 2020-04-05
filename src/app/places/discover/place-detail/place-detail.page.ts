import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  placechoisi: Place;

  constructor(
    private placesservice: PlacesService,
    private router: Router,
    private navcontrol: NavController,
    private activatedroute: ActivatedRoute,
    private modelctrl: ModalController,
    private actionsheetctrl: ActionSheetController) { }

  ngOnInit() {

    this.activatedroute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {

        this.navcontrol.navigateBack('/place/tabs/discover');

      }
      this.placechoisi = this.placesservice.getplaces(paramMap.get('placeId'));


    })

  }
  onBookplace() {

    //this.router.navigate(['/places/tabs/discover']);
    this.actionsheetctrl.create({
      header: 'Choose an Action',

      buttons: [
        {
          text: 'select Date',
          handler: () => {
            this.onBookingModal('select');



          }

        }, {

          text: ' Randome Date',
          handler: () => {

            this.onBookingModal('random');


          }

        },
        {

          text: 'Cancel',
          role: 'cancel'

        }
      ]

    }).then(actionsheetEl => {

      actionsheetEl.present();

    });




  }


  onBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modelctrl.create({ component: CreateBookingComponent, componentProps: { selectedplace: this.placechoisi } }).then(modelelement => {

      modelelement.present();
      return modelelement.onDidDismiss();


    }).then(resultdata => {

      console.log(resultdata.data, resultdata.role);

    });


  }
}
