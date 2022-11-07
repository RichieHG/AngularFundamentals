import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Passenger } from "./models/passenger.interface";
import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom, observable, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private httpClient: HttpClient) {
    // console.log(this.httpClient);
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient
      .get(PASSENGER_API)
      .pipe(
        map((response: any) =>  response)
        ,
        catchError((error: HttpResponse<any>) => throwError(() => error))
      );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.httpClient
      .get(`${PASSENGER_API}/${id}`)
      .pipe(
        map((response: any) =>  response)
        ,
        catchError((error: HttpResponse<any>) => throwError(() => error))
      );
  }

  getPassengersPromise(): Promise<Passenger[]> {
    return this.httpClient
      .get(PASSENGER_API)
      .toPromise()
      .then((response: any) => response);
  }

  getPassengersPromiseNew(): Promise<Passenger[]> {
    return lastValueFrom(
      this.httpClient
        .get(PASSENGER_API)
        .pipe(
          map((response: any) => response)
        ));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    };
    return this.httpClient
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .pipe(
        map((response: any) => response),
        catchError((error: HttpResponse<any>) => throwError(() => error))
      );
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .pipe(
        map((response: any) => response),
        catchError((error: HttpResponse<any>) => throwError(() => error))
      );
  }
}
