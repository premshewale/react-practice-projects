import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPipesComponent } from './test-pipes.component';

describe('TestPipesComponent', () => {
  let component: TestPipesComponent;
  let fixture: ComponentFixture<TestPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPipesComponent]
    });
    fixture = TestBed.createComponent(TestPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
