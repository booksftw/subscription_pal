import { Injectable } from '@angular/core';
import { SubscriptionInterface } from '../models/subscription.model'
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, Subject } from 'rxjs';
=======
import { BehaviorSubject } from 'rxjs';
>>>>>>> feature/liveupdatewithsubject2

Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptions: Observable<any>;
  // subscriptions: Subject<any> = new Subject()

  nzSubject: BehaviorSubject<any> = new BehaviorSubject([])
  constructor(private http: HttpClient) { }

  setNewSubscriptionId(oldSubscription, newSubscription) {
    if (oldSubscription.length !== 0) {
      const max = oldSubscription.reduce(function (prev, current) {
        return (prev.id > current.id) ? prev : current
      }) //returns object
      newSubscription.id = max.id + 1
      return newSubscription
    }
    newSubscription.id = 'pending'
    return newSubscription
  }

  addNewSubscription(newSubscription: SubscriptionInterface) {
    const oldSubscription = this.nzSubject.getValue()

    const newSubscriptionWithId = this.setNewSubscriptionId(oldSubscription, newSubscription)

    const newArray = [...oldSubscription, newSubscriptionWithId]
    // Update the client side view
    this.nzSubject.next(newArray)
    // Save to DB for persistent data
    this.http.post('http://localhost:3010/subscription/add', newSubscription, { responseType: 'text' }).subscribe()
  }

  getSubscriptions() {
<<<<<<< HEAD
    // this.subscriptions.next(
    //   this.http.get('http://localhost:3010/subscription')
    // )
    this.subscriptions = this.http.get('http://localhost:3010/subscription')
    console.log(this.subscriptions)
    return this.subscriptions
=======
    this.http.get('http://localhost:3010/subscription').subscribe(e => {
      this.nzSubject.next(e)
    })
    // this.nzSubject.subscribe(e => console.log(e))
    return this.nzSubject
    // return this.http.get('http://localhost:3010/subscription')
>>>>>>> feature/liveupdatewithsubject2
  }

  deleteSubscription(id: any) {
    const oldSubscription: SubscriptionInterface[] = this.nzSubject.getValue()
    // Update View
    const newArrayWithItemDeleted = oldSubscription.filter((subscriptions: any) => subscriptions.id != id)
    this.nzSubject.next(newArrayWithItemDeleted)

    // Update database
    this.http.delete(`http://localhost:3010/subscription/delete/${id}`, { responseType: 'text' }).subscribe()
  }
}
