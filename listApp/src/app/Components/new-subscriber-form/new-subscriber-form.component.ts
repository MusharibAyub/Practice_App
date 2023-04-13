import { Component, EventEmitter, Output } from '@angular/core';

import { subscriber } from '../../Models/subscriber.interfaces'

@Component({
  selector: 'app-new-subscriber-form',
  templateUrl: './new-subscriber-form.component.html',
  styleUrls: ['./new-subscriber-form.component.scss']
})
export class NewSubscriberFormComponent {
  @Output()
  add: EventEmitter<subscriber> = new EventEmitter<subscriber>
  
  handleSubmit(data: subscriber, isValid: any) {
    if(isValid) {
      this.add.emit(data);
    } else {
      alert("Error")
    }
  }
}
