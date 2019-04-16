import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { SidebarDirective } from './shared/sidebar.directive';
import {AddSubscriptionFormComponent} from './sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component'
import { SidebarService, SidebarName } from './shared/sidebar.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  @ViewChild('settingsNav') settingsNav
  @ViewChild('subscriptionNav') subscriptionNav
  @ViewChild(SidebarDirective) subscriptionSidebarContainer: SidebarDirective

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private location: Location,
    private componentFactoryResolver: ComponentFactoryResolver,
    private sidebarService: SidebarService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    console.log(this.subscriptionSidebarContainer)
    this.sidebarService.setSidebar(SidebarName.Add)
  }

  onCloseSidebar() {
    this.location.go('/')
    this.sidebarService.setSidebar(SidebarName.None)
  }

  toggleNav(type) {
    switch (type) {
      case 'settings':
        this.settingsNav.toggle()
        break;
      case 'subscription':
        console.log('subscripton toggle')
        this.sidebarService.setSidebar(SidebarName.Add)
        // Update Userid to be dynamic
        const userId = 2
        this.location.go(`/subscription/${userId}/add`)
        
        // make component dynamic
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(AddSubscriptionFormComponent)
        this.subscriptionSidebarContainer.viewContainerRef.clear()
        this.subscriptionSidebarContainer.viewContainerRef.createComponent(componentFactory)

        this.subscriptionNav.toggle()
        break;
      default:
        console.error('Something has gone wrong.')
        break;
    }
  }

  onAddSubscription() {
    console.log('parent adding new subscription')
    this.toggleNav('subscription')
  }

  onEditSubscription(subscriptionId: number) {
    console.log(`Parent Here: Edit subsription number ${subscriptionId}`)
    this.toggleNav('subscription')
  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
