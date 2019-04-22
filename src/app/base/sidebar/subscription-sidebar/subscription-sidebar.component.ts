import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
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
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sidebarService.currentSidebar.subscribe(
      // (componentFlag: string | boolean, extra: any) => {
      (sidebarState) => {
        const { componentFlag, id } = sidebarState
        componentFlag === 'add' ? this.onShowAddForn() : this.showAddForm = false
        componentFlag === 'edit' ? this.onShowEditForm(id) : this.showEditForm = false
      }
    )
  }

  onShowAddForn() {
    this.showAddForm = true
  }

  // ! Javascript Passes Destructure Item as Object Type
  // The type is defined and that's what it looks like.
  // Typescript even accepts number type for this paramater which is super bad.
  // Summary this is my workaround for passing this id as number type to the getSingleSubscription method.
  onShowEditForm(idContainer: { id: number }) {
    console.log('showeditform ID', idContainer.id)
    const subscription$ = this.subscriptionService.getSingleSubscription(idContainer.id)
    subscription$.subscribe(e => console.log(e, '<<<<<<<<<<<<<<<'))

    this.showEditForm = true
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
