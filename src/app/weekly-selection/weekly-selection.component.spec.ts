import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySelectionComponent } from './weekly-selection.component';

describe('WeeklySelectionComponent', () => {
  let component: WeeklySelectionComponent;
  let fixture: ComponentFixture<WeeklySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
