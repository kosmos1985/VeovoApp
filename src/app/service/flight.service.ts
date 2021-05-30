import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IFlight } from '../models/flight.interface';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  api_url = '../../assets/mock-data/mockFlights.ts';

  constructor(private http: HttpClient) { }

  getFlight() {
    return this.http.get<IFlight>(this.api_url).pipe(tap(console.log));
  }
}
