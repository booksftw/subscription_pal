import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SubscriptionTableComponent } from './base/subscription-table/subscription-table.component';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { SubscriptionSidebarComponent } from './base/subscription-sidebar/subscription-sidebar.component';
import { AddSubscriptionFormComponent } from './base/subscription-sidebar/add-subscription-form/add-subscription-form.component';
import { EditSubscriptionFormComponent } from './base/subscription-sidebar/edit-subscription-form/edit-subscription-form.component';
import { SidebarDirective } from './base/shared/sidebar.directive';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SubscriptionTableComponent,
    SubscriptionSidebarComponent,
    AddSubscriptionFormComponent,
    EditSubscriptionFormComponent,
    SidebarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddSubscriptionFormComponent]
})
export class AppModule { }
