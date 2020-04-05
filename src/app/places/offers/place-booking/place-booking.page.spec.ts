import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceBookingPage } from './place-booking.page';

describe('PlaceBookingPage', () => {
  let component: PlaceBookingPage;
  let fixture: ComponentFixture<PlaceBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
