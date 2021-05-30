import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights_url = 'http://localhost:3000/flights';
  registration_url = 'http://localhost:3000/registration';

  constructor(private http: HttpClient) { }

  getFlight() {
    return this.http.get<IFlight>(this.flights_url).pipe(tap(console.log));
  }
  getItem(items: string | null): {} {
    let itemArray = this.http.get<IFlight>(this.flights_url).pipe(switchMap(items => items.filter(item => item.id === items)));
    // let item = itemArray;
    return itemArray;
  }
}
