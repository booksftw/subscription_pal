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
	subscriptionList: subscription[]; 
	subName: string;
	amount: number;

	displayedColumns: string[] = ['img', 'name', 'paydate', 'amount', 'status'];
	dataSource: subscription[];
	subscriptionObservable: Observable<Object>; 
	httpName: any;
	subscriptionNameObservable: any;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getSubscriptions()
	}

	getSubscriptions() {
		console.log('calling get subscriptions')

		this.subscriptionObservable = this.http.get('http://localhost:3000/subscription')
			.pipe(
				map(res => res["subscriptions"] )
			)
		
		this.subscriptionNameObservable = this.subscriptionObservable
			.pipe(
				map(res => res["name"])
			)
<<<<<<< HEAD
			// .subscribe( res => console.log('hi', res))
=======
>>>>>>> master


		this.subscriptionObservable.subscribe( res => console.log(res))
		this.subscriptionNameObservable.subscribe( res => console.log(res))

	}
}
