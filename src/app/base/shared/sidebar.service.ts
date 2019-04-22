import { Injectable, Component } from '@angular/core'
import { SidebarItem } from '../sidebar/util/sidebarItem'
import { AddSubscriptionFormComponent } from '../sidebar/subscription-sidebar/add-subscription-form/add-subscription-form.component'
import { BehaviorSubject, Subject, AsyncSubject } from 'rxjs';
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
  public currentSidebar = this._sidebarSource.asObservable()

  setSidebar(type: SidebarName, id?: any) {
    // Create a item package and assign the generic type to that item package. Of course put these values in there.
    switch (type) {
      case SidebarName.Add:
        console.log('calling add sidebar')
        this._sidebarSource.next({ componentFlag: 'add', id: null })
        break;
      case SidebarName.Edit:
        this._sidebarSource.next({ componentFlag: 'edit', id: id })
        break;
      case SidebarName.None:
        console.log('calling none')
        this._sidebarSource.next({ componentFlag: '', id: null })
        break;
      default:
        console.log('calling default')
        this._sidebarSource.next({ componentFlag: '', id: null })
        break;
    }
  }

  getSidebar() {
    // Redundant for personal project but good for teamwork
    return this.currentSidebar
  }




}
