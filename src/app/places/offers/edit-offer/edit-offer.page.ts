import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form: FormGroup;
  place: Place;
  constructor(private activatedrouter: ActivatedRoute, private placeservice: PlacesService, private navctrl: NavController) { }
  
  ngOnInit() {

    this.activatedrouter.paramMap.subscribe(paramMap => {

      if (!paramMap.has('placeId')) {
        this.navctrl.navigateBack('/places/tabs/offers');
        return;


      }
      this.place = this.placeservice.getplaces(paramMap.get('placeId'));
      this.form = new FormGroup({
        title: new FormControl(this.place.title,{
          updateOn: 'blur',
          validators: [Validators.required]

        }),
        description: new FormControl(this.place.description,{
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)]

        })


      });


    });



  }

  editoffer(){

console.log(this.form);

  }

}
