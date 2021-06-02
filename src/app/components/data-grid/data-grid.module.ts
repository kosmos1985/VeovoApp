import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataGridComponent } from "./data-grid.component";
import { GridHeaderModule } from "./header/header.module";
import { RowModule } from "./row/row.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ModalComponent } from "./row/modal/modal.component";


@NgModule({
    declarations: [DataGridComponent,ModalComponent],
    exports: [ DataGridComponent],
    imports: [ GridHeaderModule, RowModule, CommonModule,HttpClientModule, BrowserAnimationsModule, FormsModule,ReactiveFormsModule,MatDialogModule,MatFormFieldModule,MatButtonModule,MatAutocompleteModule]

})
export class DataGridModule {}
