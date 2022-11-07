import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    <h3>Airline Passengers!</h3>
    <!-- <div>Total passengers: {{items.length}} </div> -->
    <div>Total checked in: {{checkedInCount()}}/{{items?.length}} </div>
  </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items?: Passenger[];
  constructor() { }

  checkedInCount() : number{
    if(!this.items) return 0; //Validate if there are items available
    return this.items.filter((passenger: Passenger) => passenger.checkedIn == true).length;
  }
}
