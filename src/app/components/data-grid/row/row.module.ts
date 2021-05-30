import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RowComponent } from "src/app/components/data-grid/row/row.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [RowComponent],
    exports: [RowComponent],
    imports: [CommonModule, AppRoutingModule]
})
export class RowModule {}
