import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SidebarComponentInterface } from '../../models/sidebar-component'
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
export class AddSubscriptionFormComponent implements OnInit, OnDestroy, SidebarComponentInterface {
  @Output() addSubmit: EventEmitter<any> = new EventEmitter()
  @Input() data: any
  addForm = this.fb.group({
    subscriptionName: ['', Validators.required],
    subscriptionLink: [''],
    paymentSchedule: this.fb.group({
      subscriptionAmount: [''],
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
    // console.warn(this.addForm.value);
    this.addSubmit.emit(this.addForm.value)
    // this.submit.emit('howdy')
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
