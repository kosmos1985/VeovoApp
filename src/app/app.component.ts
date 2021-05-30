import { Component, OnInit, OnDestroy } from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from './service/flight.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent  implements OnInit, OnDestroy {
    public data: IFlight[] = [];
    private subscriptions = new Subscription();
    constructor(private http: FlightService) { }
    
     ngOnInit() {
        const sub = this.http.getFlight().subscribe(dataFlight => {
          this.data = dataFlight;
          console.log(this.data);
        }, error => console.error(error),
          ()=>console.log('Complite')
        );
        this.subscriptions.add(sub);
    }; 
     ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
