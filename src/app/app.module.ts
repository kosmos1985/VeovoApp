import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { DataGridModule } from "src/app/components/data-grid/data-grid.module";
import { FlightService } from "./service/flight.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing.module";
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [AppComponent, PageNotFoundComponent, ModalComponent],
    imports: [BrowserModule,RouterModule, AppRoutingModule, DataGridModule, HttpClientModule ],
    providers: [FlightService],
    bootstrap: [AppComponent]
})
export class AppModule {}
