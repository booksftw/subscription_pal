import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, noop, } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface subscription {
	id: number;
	name: string;
	amount: number;
	image: string;
	linkToPage: string;
	createdAt: null | boolean;
}

export interface subscriptionResponse {
	subscriptions: subscription[];
}

@Component({
	selector: 'app-subscription-table',
	templateUrl: './subscription-table.component.html',
	styleUrls: ['./subscription-table.component.scss']
})

export class SubscriptionTableComponent implements OnInit {
	subscriptionList: any;// subscription[]; 
	subName: string;
	amount: number;

	displayedColumns: string[] = ['img', 'name', 'paydate', 'amount', 'status'];
	dataSource: subscription[];
	httpSubscriptions: any;//Observable<Object> //<subscription[]>;
	httpName: any;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getSubscriptions()
	}

	getSubscriptions() {
		console.log('calling get subscriptions')

		this.httpSubscriptions = this.http.get('http://localhost:3000/subscription')
			.pipe(
				map(res => {
					
					return res["subscriptions"]
				})
			)
			.pipe(
				map(res => res.map( res => {
					// console.log('map',res["name"])
					return res["name"]
				}))
			)
			.subscribe( res => console.log('hi', res))

		// this.httpSubscriptions.subscribe(res => {
		// 	console.log('you made this observale', res)
		// })


		// Pipe this value so that you pull out the column values in array
		// .subscribe((res: subscriptionResponse) => {

		// 	// console.log("subscription list", this.subscriptionList)
		// })
	}
}
