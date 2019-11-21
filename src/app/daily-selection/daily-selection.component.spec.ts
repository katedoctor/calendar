import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySelectionComponent } from './daily-selection.component';

describe('DailySelectionComponent', () => {
  let component: DailySelectionComponent;
  let fixture: ComponentFixture<DailySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
