import { Injectable } from '@angular/core';
import { SubscriptionInterface } from '../models/subscription.model'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptions: Observable<any>;

  constructor(private http: HttpClient) { }

  addNewSubscription(subscription: SubscriptionInterface) {
    console.log(subscription, ' hi')
    this.http.post('http://localhost:3010/subscription/add', subscription).subscribe()
  }

  getSubscriptions() {
    this.subscriptions = this.http.get('http://localhost:3010/subscription')
    console.log(this.subscriptions)
    return this.subscriptions
  }

  deleteSubscription(id: any) {
    console.log('angular has this id to delete' + id)
    this.http.delete(`http://localhost:3010/subscription/delete/${id}`).subscribe()
  }
}
