import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private cancelbook: Booking[];
private _bookings : Booking[]=[
{
  id: '123',
 placeId:'1',
   userId:'123',
  placetitle: 'tunis',
  guestnumber: 2

},
{
  id: '1234',
 placeId:'2',
   userId:'123',
  placetitle: 'doha',
  guestnumber: 3

},
{
  id: '1235',
 placeId:'3',
   userId:'123',
  placetitle: 'french',
  guestnumber: 4

}


];
  constructor() { }

get bookings() {

return [...this._bookings];

}

cancelbooking(idbooking:string) {

this._bookings = this._bookings.filter(booking =>{
if(booking.id !== idbooking) {

  return booking;
}
  
});
console.log(this.cancelbook);



}

}
