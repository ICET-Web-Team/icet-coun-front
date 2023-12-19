import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCallHistoryComponent } from './m-call-history.component';

describe('MCallHistoryComponent', () => {
  let component: MCallHistoryComponent;
  let fixture: ComponentFixture<MCallHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MCallHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MCallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
