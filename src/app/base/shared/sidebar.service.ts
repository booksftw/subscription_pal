import { Injectable, Component } from '@angular/core'
import { SidebarItem } from '../sidebar/util/sidebarItem'
import { AddSubscriptionFormComponent } from '../sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component'
import { BehaviorSubject, Subject } from 'rxjs';
import { EditSubscriptionFormComponent } from '../sidebar/subscription-sidebar/edit-subscription-form/edit-subscription-form.component';

export enum SidebarName {
  None,
  Add,
  Edit
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _sidebarSource: Subject<any> = new Subject() // Change to add just testing edit
  // private _sidebarSource = new BehaviorSubject<SidebarName>(SidebarName.None) // Change to add just testing edit
  public currentSidebar = this._sidebarSource.asObservable()

  setSidebar(type: SidebarName) {
    console.log('setting sidebar type ' + type)
    // Create a item package and assign the generic type to that item package. Of course put these values in there.
    switch (type) {
      case SidebarName.Add:
        console.log('calling add sidebar')
        this._sidebarSource.next('add')
        break;
      case SidebarName.Edit:
        console.log('calling edit sidebar')
        this._sidebarSource.next('edit')
        break;
      case SidebarName.None:
        this._sidebarSource.next(false)
        break;
      default:
        this._sidebarSource.next(false)
        break;
    }
  }

  getSidebar() {
    // Redundant for personal project but good for teamwork
    return this.currentSidebar
  }




}
