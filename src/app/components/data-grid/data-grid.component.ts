import { Component,OnInit, OnDestroy} from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from '../../service/flight.service';
import { Subscription } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "./row/modal/modal.component";


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
  constructor(private http: FlightService, public dialog: MatDialog) { }
    
     ngOnInit() {
        const sub = this.http.getFlight().subscribe(dataFlight => {
          this.rows = dataFlight;
          console.log(this.rows);
        }, error => console.error(error),
          ()=>console.log('Complite')
        );
        this.subscriptions.add(sub);
  };
  openDialog({}) {
    const dialogRef = this.dialog.open(ModalComponent, {
        data:{}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
  // closeDialog() {
  //   this.dialogRef.close('Pizza!');
  // }
     ngOnDestroy() {
        this.subscriptions.unsubscribe();
  };
}
