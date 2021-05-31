
import { Component, Input} from "@angular/core";

import { IFlight } from "src/app/models/flight.interface";
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from "../../modal/modal.component";




@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.scss"]
})
export class RowComponent  {
    @Input() public row!: IFlight;
    
    constructor(public dialog: MatDialog) { }
    openDialog() {
        const dialogRef = this.dialog.open(ModalComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
  
  
}
