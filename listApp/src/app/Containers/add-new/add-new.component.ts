import { Component } from '@angular/core';

import { subscriber } from 'src/app/Models/subscriber.interfaces';
import { SubscriberService } from 'src/app/Services/subscribers.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
  response: any = {};

  constructor(private subscriberService: SubscriberService) {}

  handleAdd(data: subscriber) {
    this.subscriberService.addSubscriber(data).subscribe((data: subscriber) => this.response = data)
    if(this.response.message) {
      alert('Error')
    } else {
      alert ("Subscriber Created")
    }
  }
}
