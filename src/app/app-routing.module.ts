import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionSidebarComponent } from './base/sidebar/subscription-sidebar/subscription-sidebar.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {path:'', component: BaseComponent},
  {path:'**', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
