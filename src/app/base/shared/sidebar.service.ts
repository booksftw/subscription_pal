import { Injectable } from '@angular/core'
import { SidebarItem } from '../sidebar/util/sidebarItem'
import { AddSubscriptionFormComponent } from '../sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component'
import { BehaviorSubject, Subject } from 'rxjs';

export enum SidebarName {
  None,
  Add,
  Edit
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _sidebarSource= new BehaviorSubject<SidebarName>(SidebarName.None) // Change to add just testing edit
  public currentSidebar = this._sidebarSource.asObservable()

  setSidebar(type: SidebarName) {
    if (type === SidebarName.Add) {
      // set side bar state to add
      this._sidebarSource.next( SidebarName.Add )
    }    
  }

  getSidebars() {
    
  }




}
