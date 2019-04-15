import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidebarItem } from './sidebar/util/sidebarItem';
import { SidebarService } from './shared/sidebar.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  @ViewChild('settingsNav') settingsNav
  @ViewChild('subscriptionNav') subscriptionNav
  sidebarForms: SidebarItem[]

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
      private sidebarService: SidebarService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidebarForms = this.sidebarService.getSidebars()
  }

  toggleNav(type) {
    switch (type) {
      case 'settings':
        this.settingsNav.toggle()
        break;
      case 'subscription':
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
