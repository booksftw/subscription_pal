import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

// table.increments('id').primary();
// table.string('name').notNullable();
// table.integer('amount');
// table.string('image');
// table.string('linkToPage');
// table.boolean('status');
// table.date('createdAt')
interface NZsubscription {
	name: string;
	amount: number;
	image: string;
	linkToPage: string;
	status: boolean;
	createdAt: Date;
}

@Component({
	selector: 'app-subscription-table',
	templateUrl: './subscription-table.component.html',
	styleUrls: ['./subscription-table.component.scss']
})
export class SubscriptionTableComponent implements OnInit {
	subscriptions: Subscription ; // need to update this Subscription to match the incoming data
	subName: string;
	amount: number;
	constructor(private http: HttpClient) { }

	ngOnInit() {
		console.log('init subscription table')
		this.getSubscriptions()
	}

	getSubscriptions() {
		// call a service to handle it - components manage state
		console.log('calling get subscriptions')
		this.subscriptions = this.http.get('http://localhost:3000/subscription')
			.subscribe( (res: any) => {
				console.log(res)
				this.subName = res.subscriptions[0].name;
				this.amount = res.subscriptions[0].amount;
				console.log(this.subName, this.amount)
			})
	}
}
