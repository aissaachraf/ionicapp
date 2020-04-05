import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceBookingPageRoutingModule } from './place-booking-routing.module';

import { PlaceBookingPage } from './place-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceBookingPageRoutingModule
  ],
  declarations: [PlaceBookingPage]
})
export class PlaceBookingPageModule {}
