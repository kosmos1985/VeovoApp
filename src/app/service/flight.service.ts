import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights_url = 'http://localhost:3000/flights';
  registration_url = 'http://localhost:3000/registration';
  // public flights!: Observable<IFlight[]>;

  constructor(private http: HttpClient) { }

  // getFlight():Observable<IFlight[]> {
  //   return this.flights;
  // }
  // public loadFromServer() {
  //   this.flights = this.http.get<IFlight[]>(this.flights_url).pipe(tap(console.log));
  // };

  getFlight() {
    return this.http.get<IFlight>(this.flights_url).pipe(tap(console.log));
  }
  getItem(_items: string | null): {} {
    let itemArray = this.http.get<IFlight>(this.flights_url);
    let item = itemArray.pipe(map(items => items.filter(item => item.id === _items))).subscribe();
    return item;
  }
}
