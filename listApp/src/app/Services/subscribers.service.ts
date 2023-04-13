import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';

import { subscriber } from '../Models/subscriber.interfaces';

const subscribersApi: string = 'http://localhost:3000/subscribers';

@Injectable()
export class SubscriberService{
    constructor(private http: HttpClient) {}

    getSubscribers(): Observable<subscriber[]> {
        return this.http.get<subscriber[]>(subscribersApi);
    } 

    getSubscriber(id: string): Observable<subscriber> {
        return this.http.get<subscriber>(`${subscribersApi}/${id}`);
    }

    deleteSubscriber(id: string): Observable<object> {
        return this.http.delete<object>((`${subscribersApi}/${id}`))
    }

    updateSubscriber(data: object, id: any): Observable<subscriber> {
        const header = new HttpHeaders({ 'Content-Type': 'application/json' })
        
        return this.http.patch<subscriber>(`${subscribersApi}/${id}`, data, { headers: header })
    }

    addSubscriber(data: subscriber): Observable<subscriber>{
        const header = new HttpHeaders({ 'Content-Type': 'application/json' })
        
        return this.http.post<subscriber>(subscribersApi,data, { headers: header })
    }
}