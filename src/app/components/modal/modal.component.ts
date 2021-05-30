import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from 'src/app/service/flight.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  data ={};

  constructor(public http: FlightService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    let items = this.route.snapshot.paramMap.get('id');
    this.data = this.http.getItem(items);
  };
  back() {
    this.location.back();
  };
  
}
