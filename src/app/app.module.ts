import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { DataGridModule } from "src/app/components/data-grid/data-grid.module";
import { FlightService } from "./service/flight.service";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DataGridModule, HttpClientModule ],
    providers: [FlightService],
    bootstrap: [AppComponent]
})
export class AppModule {}
