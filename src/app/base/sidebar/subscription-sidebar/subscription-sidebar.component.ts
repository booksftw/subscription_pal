import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarService } from '../../shared/sidebar.service';

@Component({
  selector: 'app-subscription-sidebar',
  templateUrl: './subscription-sidebar.component.html',
  styleUrls: ['./subscription-sidebar.component.scss']
})
export class SubscriptionSidebarComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService
    ) { }

  ngOnInit() {
    console.log('side bar smart component init')
    this.sidebarService.currentSidebar.subscribe(console.log)
   }

}
