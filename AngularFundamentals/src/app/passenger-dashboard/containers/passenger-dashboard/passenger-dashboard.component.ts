import { Component, OnInit } from "@angular/core";
import { Passenger } from "src/app/passenger-dashboard/models/passenger.interface";


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor() { }
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullName: "Ricardo",
        checkedIn: true,
        checkInDate: 1460842000000,
        children: [{ name: "Rosa", age: 12 }]
      },
      {
        id: 2,
        fullName: "Ricardo2",
        checkedIn: true,
        checkInDate: 1410842000000,
        children: null
      },
      {
        id: 3,
        fullName: "Ricardo3",
        checkedIn: false,
        checkInDate: null,
        children: [{ name: "Luisa", age: 12 }]

      },
      {
        id: 4,
        fullName: "Ricardo4",
        checkedIn: true,
        checkInDate: 1890722000000,
        children: null
      }
    ]
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passsenger: Passenger) => {
      if(passsenger.id === event.id){
        passsenger = Object.assign({}, passsenger, event);
      }
      return passsenger;
    });
  }
}
