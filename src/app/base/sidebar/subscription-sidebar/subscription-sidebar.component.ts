import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarService, SidebarName } from '../../shared/sidebar.service';
import { SidebarDirective } from '../../shared/sidebar.directive';
import { AddSubscriptionFormComponent } from './add-subscription-form/add-subscription-form.component';
import { EditSubscriptionFormComponent } from './edit-subscription-form/edit-subscription-form.component';
import { SubscriptionService } from '../../shared/subscription.service';
import { SubscriptionInterface } from '../../models/subscription.model';

//
// ──────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: S M A R T   C O M P O N E N T   F O R   S I D E B A R S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
//
@Component({
  selector: 'app-subscription-sidebar',
  templateUrl: './subscription-sidebar.component.html',
  styleUrls: ['./subscription-sidebar.component.scss']
})
export class SubscriptionSidebarComponent implements OnInit {
  @Output() addSubscriptionEvent: EventEmitter<any> = new EventEmitter()
  @ViewChild(SidebarDirective) subscriptionSidebarContainer: SidebarDirective
  data: any
  showAddForm: boolean
  showEditForm: boolean

  constructor(
    private sidebarService: SidebarService,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit() {
    // GET DATA FOR EDIT SIDEBAR AND SEND IT

    this.sidebarService.currentSidebar.subscribe(
      (componentFlag: string | boolean) => {
        componentFlag === 'add' ? this.showAddForm = true : this.showAddForm = false
        componentFlag === 'edit' ? this.showEditForm = true : this.showEditForm = false
      }
    )


  }

  onAddSubscription($event) {
    console.log($event, 'smart component')
    this.addSubscriptionEvent.emit()

    let name = $event.subscriptionName
    let amount = $event.paymentSchedule.subscriptionAmount
    let linkToPage = $event.subscriptionLink
    let image = ''
    let status = true

    const newSubscriptionRecord: SubscriptionInterface = {
      name, amount, linkToPage, image, status
    }
    this.subscriptionService.addNewSubscription(newSubscriptionRecord)
  }

}
