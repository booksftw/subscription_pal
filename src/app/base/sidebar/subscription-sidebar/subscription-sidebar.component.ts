import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarService, SidebarName } from '../../shared/sidebar.service';
import { SidebarDirective } from '../../shared/sidebar.directive';
import { AddSubscriptionFormComponent } from './add-subscription-form/add-subscription-form.component';
import { EditSubscriptionFormComponent } from './edit-subscription-form/edit-subscription-form.component';

@Component({
  selector: 'app-subscription-sidebar',
  templateUrl: './subscription-sidebar.component.html',
  styleUrls: ['./subscription-sidebar.component.scss']
})
export class SubscriptionSidebarComponent implements OnInit {
  @ViewChild(SidebarDirective) subscriptionSidebarContainer: SidebarDirective

  constructor(
    private sidebarService: SidebarService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    console.log('side bar smart component init')

    this.sidebarService.currentSidebar.subscribe(
      (component: any) => {
        console.log(component, 'console log from subscription')
       if (!component) {
         return
       } {
         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)
         console.log('compfact', componentFactory)
         this.subscriptionSidebarContainer.viewContainerRef.clear()
         this.subscriptionSidebarContainer.viewContainerRef.createComponent(componentFactory)
       }
      }
    )
    
    onAddSubscription($event) {

    }

  }



}
