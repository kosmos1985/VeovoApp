import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registration_url: string = 'http://localhost:3000/registration';
  
  constructor(public http: HttpClient) { }
  getRegistration() {
    return this.http.get(this.registration_url).pipe(tap(console.log));
  }
}
