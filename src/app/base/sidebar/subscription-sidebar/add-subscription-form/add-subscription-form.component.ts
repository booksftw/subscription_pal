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

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addForm.value);
  }



  // Set the data to be passed from service
  // tiles: [ 
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}
  // ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
