import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription, noop, } from 'rxjs'
import { map, filter, tap, shareReplay } from 'rxjs/operators'
import { SelectionModel } from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material'
import { SubscriptionService } from '../shared/subscription.service';
import { SubscriptionInterface } from '../models/subscription.model';
import { SidebarService, SidebarName } from '../shared/sidebar.service';


interface subscription {
	id: number
	name: string
	amount: number
	image: string
	linkToPage: string
	createdAt: null | boolean
}

export interface subscriptionResponse {
	subscriptions: subscription[]
}

@Component({
	selector: 'app-subscription-table',
	templateUrl: './subscription-table.component.html',
	styleUrls: ['./subscription-table.component.scss']
})

export class SubscriptionTableComponent implements OnInit {
	@Output() editSub: EventEmitter<number> = new EventEmitter();
	@Output() addSub: EventEmitter<void> = new EventEmitter();
	subscriptionList: any
	subName: string
	amount: number

	displayedColumns: string[] = ['select', 'id', 'name', 'amount', 'status', 'remove']
	dataSource: any = new MatTableDataSource([])
	selection = new SelectionModel<any>(true, []) // new SelectionModel<subscription>(true, [])

	constructor(
		private http: HttpClient,
		private subscriptionService: SubscriptionService,
		private sidebarService: SidebarService
	) { }

	ngOnInit() {
		this.subscriptionService.getSubscriptions()
			.subscribe((res) => {
				console.log('table res', res)
				this.dataSource.data = res
			}) // Optimization: Pass to template to subscribe with async
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected == numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ?
			this.selection.clear() :
			this.dataSource.data.forEach(row => this.selection.select(row));
	}

	rowClicked(row) {
		console.log('row clicked', row, row.id, '<<<<<')
		this.editSub.emit(row.id)
		// Trigger the sidebar service and send the id of the row
		this.sidebarService.setSidebar(SidebarName.Edit)
	}

	deleteRowClicked(subscriptionRecord) {
		console.log('delete row clicked', subscriptionRecord)
		const { id } = subscriptionRecord
		this.subscriptionService.deleteSubscription(id)
	}

	addSubscription() {
		this.addSub.emit()
	}

	editSubscription(subscription: any) {
		const { id } = subscription
		this.editSub.emit(id);
	}
}
