import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input() selectedplace:Place;

  constructor(private modelctrl: ModalController) { }

  ngOnInit() {
console.log(this.selectedplace.availblefrom.toISOString() + this.selectedplace.availbalto.toISOString()  )
  }
  oncancel(){

this.modelctrl.dismiss(null,'cancel');

  }
  onplacebook(){
    this.modelctrl.dismiss({message:'booking sucess'},'comfirm');



  }


}
