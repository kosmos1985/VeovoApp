import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RowComponent } from "src/app/components/data-grid/row/row.component";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { ModalComponent } from "./modal/modal.component";



@NgModule({
    declarations: [RowComponent, ModalComponent],
    exports: [RowComponent],
    imports: [CommonModule,HttpClientModule, BrowserAnimationsModule, FormsModule,MatDialogModule,MatFormFieldModule,MatButtonModule]
})
export class RowModule {}
