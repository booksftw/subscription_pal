import { Component, OnInit, Input } from '@angular/core';
import {SidebarComponentInterface} from '../../models/sidebar-component'

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

  // Set the data to be passed from service
  // tiles: [ 
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'}
  // ];

  constructor() { }

  ngOnInit() {
  }

}
