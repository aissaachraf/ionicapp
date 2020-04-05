import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
bookings: Booking[];
  constructor(private bookingservice: BookingService,private router: Router) { }

  ngOnInit() {

    this.bookings = this.bookingservice.bookings;
  }

  cancelbooking(idbooking: string, slidingitem: IonItemSliding) {
  
  slidingitem.close();
  this.bookingservice.cancelbooking(idbooking);
  this.router.navigate(['/','places','tabs','discover'])

  }

}
