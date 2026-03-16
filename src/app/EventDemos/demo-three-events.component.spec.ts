import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoThreeEventsComponent } from './demo-three-events.component';

describe('DemoThreeEventsComponent', () => {
  let component: DemoThreeEventsComponent;
  let fixture: ComponentFixture<DemoThreeEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoThreeEventsComponent]
    });
    fixture = TestBed.createComponent(DemoThreeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
