import { Component, Input, OnDestroy, OnInit,Inject } from '@angular/core';

import { FlightService } from 'src/app/service/flight.service';

import { Observable, Subscription } from 'rxjs';

import { RegistrationService } from 'src/app/service/registration.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";






@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  
  control = new FormControl();
  codes: string[] = [];
  filteredCode!: Observable<string[]>;
  // description!: string;
  // form!: FormGroup;

  private subscriptions2 = new Subscription();
  
  
  // // private subscriptions1 = new Subscription();
  
 
  

  constructor(public http: FlightService, public regHttp: RegistrationService, private fb: FormBuilder,private dialogRef: MatDialogRef<ModalComponent>) {}
  
  ngOnInit() {
    const sub2 = this.regHttp.getRegistration().subscribe(dataReg => {
              this.codes = dataReg;
              console.log(this.codes);
            }, error => console.error(error),
              ()=>console.log('Complite')
            );
            this.subscriptions2.add(sub2);

        
    
    this.filteredCode = this.control.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.codes.filter(code => this._normalizeValue(code).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
 
  // save() {
  //   this.dialogRef.close(this.form.value);
  // }

  // close() {
  //     this.dialogRef.close();
  // }
  
        // const sub1 = this.http.getFlight().subscribe(dataFlight => {
        //   this.data = dataFlight;
        //   console.log(this.data);
        // }, error => console.error(error),
        //   ()=>console.log('Complite')
        // );
        // this.subscriptions1.add(sub1);
      
  
    ngOnDestroy() {
      this.subscriptions2.unsubscribe();
    };
 
}


  
  

