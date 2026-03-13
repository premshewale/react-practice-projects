import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEventsComponent } from './sample-events.component';

describe('SampleEventsComponent', () => {
  let component: SampleEventsComponent;
  let fixture: ComponentFixture<SampleEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleEventsComponent]
    });
    fixture = TestBed.createComponent(SampleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
