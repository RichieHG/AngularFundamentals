import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Passenger } from "src/app/passenger-dashboard/models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(
    private passengerService : PassengerDashboardService,
    private router : Router
  ) {

   }
  ngOnInit() {
    this.passengerService
    .getPassengers()
    .subscribe({
      next: (data : Passenger[]) => this.passengers = data
      // error: (error: any) => console.log('E',error)
      // complete: () => console.log("Finished")
    }

    );

    // this.passengerService
    // .getPassengersPromise()
    // .then((data : Passenger[]) => this.passengers = data);

    // this.passengerService
    // .getPassengersPromiseNew()
    // .then((data : Passenger[]) => this.passengers = data);
  }
  handleEdit(event: Passenger){
    this.passengerService
    .updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passsenger: Passenger) => {
        if(passsenger.id === event.id){
          passsenger = Object.assign({}, passsenger, event);
        }
        return passsenger;
      });
    });
  }

  handleRemove(event: Passenger){
    this.passengerService
    .removePassenger(event)
    .subscribe((data : Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
    });
  }
  handleView(event: Passenger){
    this.router.navigate(['/passengers',event.id]);
  }
}
