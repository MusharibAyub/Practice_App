import { Component, EventEmitter, Input, Output } from '@angular/core';

import { subscriber } from '../../Models/subscriber.interfaces'

@Component({
  selector: 'app-subscriber-card',
  templateUrl: './subscriber-card.component.html',
  styleUrls: ['./subscriber-card.component.scss']
})
export class SubscriberCardComponent {
  @Input()
  subscriber: subscriber = {
    _id: "",
    name: "",
    subscribedToChannel: "",
    subscribeDate: ""
  };

  @Output()
  del: EventEmitter<string> = new EventEmitter<string>

  handleDelete(id: any) {
    this.del.emit(id);
  }
}
