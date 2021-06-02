import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registration_url: string = 'http://localhost:3000/registration';
  queryUrl = '?search=';
  
  constructor(public http: HttpClient) { }
  getRegistration() {
    return this.http.get(this.registration_url).pipe(tap(console.log));
  }
}
