import {Type} from '@angular/core'

export class SidebarItem {
    constructor(public component: Type<any>, public data: any) {}
}