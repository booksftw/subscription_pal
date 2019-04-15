import { Component, OnInit, Input } from '@angular/core';
import {SidebarComponentInterface} from '../../../models/sidebar-component'

@Component({
  selector: 'app-add-subscription-form',
  templateUrl: './add-subscription-form.component.html',
  styleUrls: ['./add-subscription-form.component.scss']
})
export class AddSubscriptionFormComponent implements OnInit, SidebarComponentInterface {
  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
