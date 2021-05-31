import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  private subscriptions = new Subscription();

  constructor(public http: FlightService,public regHttp:FlightService, private route: ActivatedRoute, private location: Location) { }
  // get registrations() {
  //   this.regs = this.http.getRegistrations(); 
  //   return this.regs;
  // }
  ngOnInit(): void {
    // let items = this.route.snapshot.paramMap.get('id');
    // let item = this.http.getItem(items);
    // this.data = item;
    // console.log(this.data);

    const sub = this.regHttp.getRegistration().subscribe(dataReg => {
      this.regs = dataReg;
      console.log(this.regs);
    }, error => console.error(error),
      ()=>console.log('Complite')
    );
    this.subscriptions.add(sub);
    
  };
  // get registrations() {
  //   this.regs = this.regHttp.getRegistration();
  // }
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
    this.subscriptions.unsubscribe();
  };
 
}

  
  

