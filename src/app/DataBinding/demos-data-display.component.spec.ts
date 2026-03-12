import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosDataDisplayComponent } from './demos-data-display.component';

describe('DemosDataDisplayComponent', () => {
  let component: DemosDataDisplayComponent;
  let fixture: ComponentFixture<DemosDataDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosDataDisplayComponent]
    });
    fixture = TestBed.createComponent(DemosDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
