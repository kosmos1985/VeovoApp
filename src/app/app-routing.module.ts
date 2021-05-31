import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataGridComponent } from './components/data-grid/data-grid.component';
// import { ModalComponent } from './components/modal/modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full'},
  { path: 'grid', component: DataGridComponent },
  // { path: 'grid/:id', component: ModalComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
