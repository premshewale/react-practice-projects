import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDetailsComponent } from './sports-details.component';

describe('SportsDetailsComponent', () => {
  let component: SportsDetailsComponent;
  let fixture: ComponentFixture<SportsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsDetailsComponent]
    });
    fixture = TestBed.createComponent(SportsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
