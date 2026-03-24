import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblePanelComponent } from './collapsible-panel.component';

describe('CollapsiblePanelComponent', () => {
  let component: CollapsiblePanelComponent;
  let fixture: ComponentFixture<CollapsiblePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsiblePanelComponent]
    });
    fixture = TestBed.createComponent(CollapsiblePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
