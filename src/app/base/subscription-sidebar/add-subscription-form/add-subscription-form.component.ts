import { Component, OnInit, Input } from '@angular/core';
import {SidebarComponent} from '../../models/sidebar-component'

@Component({
  selector: 'app-add-subscription-form',
  templateUrl: './add-subscription-form.component.html',
  styleUrls: ['./add-subscription-form.component.scss']
})
export class AddSubscriptionFormComponent implements OnInit, SidebarComponent {
  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
