import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProgressChartComponent } from './completed-progress-chart.component';

describe('CompletedProgressChartComponent', () => {
  let component: CompletedProgressChartComponent;
  let fixture: ComponentFixture<CompletedProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedProgressChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
