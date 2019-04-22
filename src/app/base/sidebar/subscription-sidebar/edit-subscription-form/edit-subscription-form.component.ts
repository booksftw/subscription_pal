import { Component, OnInit, Input } from '@angular/core';

//
// ─── DUMB COMPONENT SIDEBAR ─────────────────────────────────────────────────────
//
@Component({
  selector: 'app-edit-subscription-form',
  templateUrl: './edit-subscription-form.component.html',
  styleUrls: ['./edit-subscription-form.component.scss']
})
export class EditSubscriptionFormComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
