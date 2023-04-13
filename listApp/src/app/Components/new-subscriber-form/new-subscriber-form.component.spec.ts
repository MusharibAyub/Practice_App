import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubscriberFormComponent } from './new-subscriber-form.component';

describe('NewSubscriberFormComponent', () => {
  let component: NewSubscriberFormComponent;
  let fixture: ComponentFixture<NewSubscriberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubscriberFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSubscriberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
