import { Injectable } from '@angular/core';
import { SubscriptionInterface } from '../models/subscription.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  addNewSubscription(subscription: SubscriptionInterface) {
    console.log(subscription, ' hi')
    this.http.post('http://localhost:3010/subscription/add', subscription).subscribe()
  }
}
