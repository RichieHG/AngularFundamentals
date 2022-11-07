import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Passenger } from '../passenger-dashboard/models/passenger.interface';

@Injectable()
export class LocalDataServerService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let passengers : Passenger[] = [
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
    ];
    return{passengers};
  }
}
