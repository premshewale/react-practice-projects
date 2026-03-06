import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribSampleComponent } from './attrib-sample.component';

describe('AttribSampleComponent', () => {
  let component: AttribSampleComponent;
  let fixture: ComponentFixture<AttribSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttribSampleComponent]
    });
    fixture = TestBed.createComponent(AttribSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
