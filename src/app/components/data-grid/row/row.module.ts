import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RowComponent } from "src/app/components/data-grid/row/row.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [RowComponent],
    exports: [RowComponent],
    imports: [CommonModule, AppRoutingModule, FormsModule]
})
export class RowModule {}
