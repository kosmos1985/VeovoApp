import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from 'src/app/service/flight.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  data = {};
  private subscriptions = new Subscription();

  constructor(public http: FlightService, private route: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
    let items = this.route.snapshot.paramMap.get('id');
    let item = this.http.getItem(items);
    this.data = item;
    console.log(this.data);
    
  };
  back() {
    this.location.back();
  };
 
}

  
  

