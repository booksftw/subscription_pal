import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionStore {
    const subscriptionSubject = BehaviorSubject
    const subscriptionObservable = Observable.create(next('howdy'))

    select() {

    }

    delete() {

    }

}