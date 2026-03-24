import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticOprationsComponent } from './arithmetic-oprations.component';

describe('ArithmeticOprationsComponent', () => {
  let component: ArithmeticOprationsComponent;
  let fixture: ComponentFixture<ArithmeticOprationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArithmeticOprationsComponent]
    });
    fixture = TestBed.createComponent(ArithmeticOprationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
