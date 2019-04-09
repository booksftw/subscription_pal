import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription, noop, } from 'rxjs'
import { map, filter, tap, shareReplay } from 'rxjs/operators'
import { SelectionModel } from '@angular/cdk/collections'
import { MatTableDataSource } from '@angular/material'


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
	subscriptionList: any
	subName: string
	amount: number

	displayedColumns: string[] = ['select', 'id', 'name', 'amount', 'status', 'remove']
	dataSource = new MatTableDataSource([])
	// httpSubscriptions: Subscription<subscription[]>
	selection = new SelectionModel<any>(true, []) // new SelectionModel<subscription>(true, [])
	listLength: number

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getSubscriptions()
	}
	getSubscriptions() {
		console.log('calling get subscriptions')

		this.http.get('http://localhost:3000/subscription')
			.pipe(
				tap((res) => console.log(res)),
				map(res => {
					return res["subscriptions"]
				}),
				tap((res) => this.listLength = res.length),
			)
			.subscribe((res) => this.dataSource.data = res)
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
		console.log('row', row, this.selection)
	}

	deleteRowClicked(e) {
		console.log('delete row clicked', e)
	}
}
