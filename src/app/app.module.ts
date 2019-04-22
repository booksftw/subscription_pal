import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SubscriptionTableComponent } from './base/subscription-table/subscription-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarModule } from './base/sidebar/sidebar.module';
import { AddSubscriptionFormComponent } from './base/sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component';
import { EditSubscriptionFormComponent } from './base/sidebar/subscription-sidebar/edit-subscription-form/edit-subscription-form.component';
import { SubscriptionService } from './base/shared/subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SubscriptionTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddSubscriptionFormComponent, EditSubscriptionFormComponent]
})
export class AppModule { }
