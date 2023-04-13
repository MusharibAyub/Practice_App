import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { SubscriberService } from '../../Services/subscribers.service'
import { subscriber } from 'src/app/Models/subscriber.interfaces';


@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrls: ['./subscriber-detail.component.scss']
})
export class SubscriberDetailComponent implements OnInit {
  subscriber: subscriber = {
    _id: '',
    name: '',
    subscribedToChannel: '',
    subscribeDate: ''
  }
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subscriberService: SubscriberService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.subscriberService.getSubscriber(data['id'])
      .subscribe((sub: subscriber) => this.subscriber = sub)
    })
  }

  handleEdit(data: object) {
    this.subscriberService.updateSubscriber(data, this.subscriber._id)
    .subscribe((data: subscriber) => this.subscriber = data)
  }
}
