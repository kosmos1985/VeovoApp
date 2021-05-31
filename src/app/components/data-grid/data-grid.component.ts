import { Component,OnInit, OnDestroy} from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from '../../service/flight.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.scss"]
})
export class DataGridComponent implements OnInit,OnDestroy{
    public readonly sampleHeaders = [
        "flight",
        "sch. date",
        "sch.time",
        "o/d",
        "registration"
    ];

    
  public rows: IFlight[] = [];
  private subscriptions = new Subscription();
  constructor(private http: FlightService) { }
  // getflights() {
  //   this.rows = this.http.getFlights();
  //   console.log(this.rows);
    
  //   return this.rows;
  // }
    
     ngOnInit() {
        const sub = this.http.getFlight().subscribe(dataFlight => {
          this.rows = dataFlight;
          console.log(this.rows);
        }, error => console.error(error),
          ()=>console.log('Complite')
        );
        this.subscriptions.add(sub);
    }; 
     ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
