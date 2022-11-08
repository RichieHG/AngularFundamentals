import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { switchMap } from "rxjs";
@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <button (click)="goBack()"> &lsaquo; Go back</button>
    <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
  </div>
  `
})

export class PassengerViewerComponent implements OnInit {

  passenger?: Passenger;
  // id?: number;
  constructor(
    private passengerSevice: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.route.params
      // .subscribe((data: Params) => {
      //   console.log(data);
      //   this.id = data['id'];
      // });
      .pipe(
        switchMap((data: Params) => this.passengerSevice.getPassenger(data['id']))
      )
      .subscribe((data: Passenger) => this.passenger = data);

  }

  onUpdatePassenger(event: Passenger) {
    this.passengerSevice
      .updatePassenger(event)
      .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
  }

  goBack(){
    this.router.navigate(['/passengers']);
  }
}
