import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NztestsComponent} from './base/sidebar/nztests/nztests.component'

const routes: Routes = [
  { path: 'nz', component: NztestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
