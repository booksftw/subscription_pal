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

  private _sidebarSource = new BehaviorSubject<SidebarName>(SidebarName.None) // Change to add just testing edit
  public currentSidebar = this._sidebarSource.asObservable()

  setSidebar(type: SidebarName) {
    switch (type) {
      case SidebarName.Add:
        this._sidebarSource.next(SidebarName.Add)
        break;
      case SidebarName.Edit:
        this._sidebarSource.next(SidebarName.Edit)
        break;
      case SidebarName.None:
        this._sidebarSource.next(SidebarName.None)
        break;
      default:
        this._sidebarSource.next(SidebarName.None)
        break;
    }
  }

  getSidebar() {
    // Redundant for personal project but good for teamwork
    return this.currentSidebar
  }




}
