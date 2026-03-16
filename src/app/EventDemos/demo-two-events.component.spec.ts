import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTwoEventsComponent } from './demo-two-events.component';

describe('DemoTwoEventsComponent', () => {
  let component: DemoTwoEventsComponent;
  let fixture: ComponentFixture<DemoTwoEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoTwoEventsComponent]
    });
    fixture = TestBed.createComponent(DemoTwoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
