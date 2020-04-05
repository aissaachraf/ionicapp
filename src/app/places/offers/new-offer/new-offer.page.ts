import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]

      }),


      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(128)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      file: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]

      }),
      startdate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      enddate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]

      })




    });
  }

  createoffer() {

    console.log(this.form);

  }


}


