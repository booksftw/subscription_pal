import { Component, OnInit, Input } from '@angular/core';
import {SidebarComponentInterface} from '../../models/sidebar-component'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-add-subscription-form',
  templateUrl: './add-subscription-form.component.html',
  styleUrls: ['./add-subscription-form.component.scss']
})
export class AddSubscriptionFormComponent implements OnInit, SidebarComponentInterface {
  @Input() data: any
  addForm = this.fb.group({
    subscriptionName: ['', Validators.required],
    subscriptionLink: [''],
    paymentSchedule: this.fb.group({
      subscriptionDate: [''],
      dateInterval: [''],
    }),
    reminders: this.fb.group({
      reminderEmail: [''],
      reminderSms: [''],
    }),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
