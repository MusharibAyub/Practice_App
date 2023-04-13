import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberDetailCardComponent } from './subscriber-detail-card.component';

describe('SubscriberDetailCardComponent', () => {
  let component: SubscriberDetailCardComponent;
  let fixture: ComponentFixture<SubscriberDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriberDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriberDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
