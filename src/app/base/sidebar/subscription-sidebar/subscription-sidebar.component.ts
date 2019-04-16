import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SidebarItem } from '../util/sidebarItem';
import { SidebarDirective } from '../../shared/sidebar.directive';
import { SidebarComponentInterface } from '../models/sidebar-component';

@Component({
  selector: 'app-subscription-sidebar',
  templateUrl: './subscription-sidebar.component.html',
  styleUrls: ['./subscription-sidebar.component.scss']
})
export class SubscriptionSidebarComponent implements OnInit {
  @Input() sidebarForms: SidebarItem[]
  @ViewChild(SidebarDirective) sidebarContainer: SidebarDirective

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
      this.loadSidebar()
   }

  loadSidebar() {

    let activeSidebarItem = this.sidebarForms[0]
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(activeSidebarItem.component)

    let viewContainerRef = this.sidebarContainer.viewContainerRef
    viewContainerRef.clear()

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<SidebarComponentInterface>componentRef.instance).data = activeSidebarItem.data;
  }

  // ngAfterContentInit() {

  //   this.loadSidebar()
  // }

}
