import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { SidebarService, SidebarName } from './shared/sidebar.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  @ViewChild('settingsNav') settingsNav
  @ViewChild('subscriptionNav') subscriptionNav

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private location: Location,
    private sidebarService: SidebarService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidebarService.currentSidebar.subscribe(console.log)
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
