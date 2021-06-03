import { Component, OnDestroy, OnInit,Inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RegistrationService } from 'src/app/service/registration.service';
import { FormControl} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  
  control = new FormControl();
  codes: string[] = [];
  filteredCode!: Observable<string[]>;
  private subscriptions2 = new Subscription();
  
  constructor( public regHttp: RegistrationService, @Inject(MAT_DIALOG_DATA) public data: any) {}
  
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
 
  console(data: any) {
    console.log(data);
    
  }
    ngOnDestroy() {
      this.subscriptions2.unsubscribe();
    };
 
}


  
  

