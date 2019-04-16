import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionSidebarComponent } from './subscription-sidebar/subscription-sidebar.component'
import { AddSubscriptionFormComponent } from './subscription-sidebar/add-subscription-form/add-subscription-form.component'
import { EditSubscriptionFormComponent } from './subscription-sidebar/edit-subscription-form/edit-subscription-form.component'
import {SidebarDirective} from '../shared/sidebar.directive'
import {MaterialModule} from '../../material.module'

@NgModule({
  declarations: [
    SubscriptionSidebarComponent,
    AddSubscriptionFormComponent,
    EditSubscriptionFormComponent,
    SidebarDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SubscriptionSidebarComponent,
    AddSubscriptionFormComponent,
    EditSubscriptionFormComponent,
    SidebarDirective
  ],
  entryComponents: [
    AddSubscriptionFormComponent
  ]
})
export class SidebarModule { }
