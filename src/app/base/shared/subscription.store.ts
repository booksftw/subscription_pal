import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionStore {
    subscriptionSubject = new BehaviorSubject('begin')
    // subscriptionObservable = Observable.create(next('howdy'))

    select() {

    }

    delete() {

    }

}