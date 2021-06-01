import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IFlight } from "src/app/models/flight.interface";
import { FlightService } from 'src/app/service/flight.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Registration } from 'src/app/models/registration';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy{
  // data = {};
  
  regs:Registration[]=[];
  searchText!: string | Registration[];
  // public data: IFlight[] = [];
  
  // private subscriptions1 = new Subscription();
  private subscriptions2 = new Subscription();

  constructor(public http: FlightService,public regHttp:FlightService, private location: Location) { }
  // get registrations() {
  //   this.regs = this.http.getRegistrations(); 
  //   return this.regs;
  // }
  ngOnInit(): void {
    // const sub1 = this.http.getFlight().subscribe(dataFlight => {
    //   this.data = dataFlight;
    //   console.log(this.data);
    // }, error => console.error(error),
    //   ()=>console.log('Complite')
    // );
    // this.subscriptions1.add(sub1);
 

    const sub2 = this.regHttp.getRegistration().subscribe(dataReg => {
      this.regs = dataReg;
      console.log(this.regs);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions2.add(sub2);
    
  };

  back() {
    this.location.back();
    console.log(this.searchText);
    
  };
  Search() {
    this.searchText = this.regs.filter(res => {
      return res.code;
    });
    if (this.searchText.length === 0) {
      this.regs = [];
    }
   
  };
  hideList() {
    this.regs = [];
  };
  ngOnDestroy() {
    this.subscriptions2.unsubscribe();
  };
 
}

  
  

