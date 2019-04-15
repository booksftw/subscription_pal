import { Injectable } from '@angular/core'
import { SidebarItem } from '../sidebar/util/sidebarItem'
import {AddSubscriptionFormComponent} from '../sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component'

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  getSidebars() {
    // Because we made an interface and we're passing this to another part of program
    // Other places in the program can use it AGNOSTIC. 
    // THE REST OF THE PROGRAM DOESNT CARE ABOUT WHERE IT COMES FROM
    // IT JUST CARES THAT IT FOLLOWS THE INTERFACE SO THAT IT CAN GO TO THE MAGIC SHELF AND GET IT
    // THE ADVANTAGE IS THAT WE CAN SWAP THIS SIDEBAR ITEM WITH ANYTHING ELSE AND LONG AS IT FOLLOWS THE INTERFACE
    // WERE GOOD
    const addSubscriptionSidebarItem = new SidebarItem(AddSubscriptionFormComponent, {name:'Nicholas Z'})
    return [addSubscriptionSidebarItem]
  }

}
