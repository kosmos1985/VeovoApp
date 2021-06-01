import { Injectable } from '@angular/core';
// import { DataBase } from '../data/dataFlights';
// import { DataBase2 } from '../data/dataRegistration';
// import { IFlight } from '../models/flight.interface';
// import { Registration } from '../models/registration';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights_url = 'http://localhost:3000/flights';
  registration_url = 'http://localhost:3000/registration';
  // public flights!: Observable<IFlight[]>;
  // private flights: IFlight[] = [];
  // private registrations: Registration[] = [];
  constructor(public http:HttpClient) {
    // this.flights = DataBase;
    // this.registrations = DataBase2;
  }
  // getFlights(): IFlight[] {
  //   return this.flights;
  // };
  // getRegistrations(): Registration[]{
  //   return this.registrations;
  // };
  // getFlight():Observable<IFlight[]> {
  //   return this.flights;
  // }
  // public loadFromServer() {
  //   this.flights = this.http.get<IFlight[]>(this.flights_url).pipe(tap(console.log));
  // };

  getFlight() {
    return this.http.get<IFlight>(this.flights_url).pipe(tap(console.log));
  };
  // getItem(_items: string | null): {} {
  //   let itemArray = this.http.get<IFlight>(this.flights_url);
  //   let item = itemArray.pipe(map(items => items.filter(item => item.id === _items))).subscribe();
  //   return item;
  // };
  getRegistration() {
    return this.http.get<Registration>(this.registration_url).pipe(tap(console.log));
  }
}
