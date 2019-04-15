import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NztestsComponent } from './nztests/nztests.component';
import { SubscriptionSidebarComponent } from './subscription-sidebar/subscription-sidebar.component';
import { AddSubscriptionFormComponent } from './subscription-sidebar/add-subscription-form/add-subscription-form.component';
import { EditSubscriptionFormComponent } from './subscription-sidebar/edit-subscription-form/edit-subscription-form.component';
import { SidebarDirective } from '../shared/sidebar.directive';

@NgModule({
  declarations: [
    NztestsComponent,
    SubscriptionSidebarComponent,
    AddSubscriptionFormComponent,
    EditSubscriptionFormComponent,
    SidebarDirective,
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [AddSubscriptionFormComponent]
})
export class SidebarModule { }
