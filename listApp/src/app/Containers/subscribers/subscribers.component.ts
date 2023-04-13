import { Component, OnInit, SimpleChanges } from '@angular/core';

import { subscriber } from '../../Models/subscriber.interfaces';
import { SubscriberService } from '../../Services/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit{
  subscribers: subscriber[] = [];

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit() {
    this.subscriberService
      .getSubscribers()
      .subscribe((data: subscriber[]) => this.subscribers = data);
  }

  handleDel(id: string) {
    this.subscriberService.deleteSubscriber(id).subscribe((response: any) => {
      if (response.message === 'Deleted Subscriber'){
        this.subscribers = this.subscribers.filter((obj: subscriber) => obj._id !== id)
      } else {
        alert('Error')
      }
    })
  }
}
