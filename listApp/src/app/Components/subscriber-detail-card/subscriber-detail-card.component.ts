import { Component, EventEmitter, Input, Output } from '@angular/core';
import { subscriber } from 'src/app/Models/subscriber.interfaces';

interface MyObject {
  [key: string]: any;
}

@Component({
  selector: 'app-subscriber-detail-card',
  templateUrl: './subscriber-detail-card.component.html',
  styleUrls: ['./subscriber-detail-card.component.scss']
})
export class SubscriberDetailCardComponent {
  @Input()
  data: subscriber = {
    _id: '',
    name: '',
    subscribedToChannel: '',
    subscribeDate: ''
  }

  @Output()
  edit: EventEmitter<object> = new EventEmitter<object>

  editName: boolean = false;
  editChannel: boolean = false;

  toggleEditName() {
    this.editName = true;
  }

  toggleEditChannel() {
    this.editChannel = true;
  }

  handleEdit(key: string, value: string) {
    if (key === 'name'){
      this.editName = false;
    } else if (key === 'subscribedToChannel') {
      this.editChannel = false;
    } else {
      alert('Error')
    }
    const edit: MyObject = {}
    edit[key] = value;
    this.edit.emit(edit)
  }

}
