import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceBookingPage } from './place-booking.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceBookingPageRoutingModule {}
