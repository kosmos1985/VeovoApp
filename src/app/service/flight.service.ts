import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';



@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights_url = 'http://localhost:3000/flights';
  
 constructor(public http:HttpClient) {}
  getFlight() {
    return this.http.get<IFlight>(this.flights_url).pipe(tap(console.log));
  };
  
}
