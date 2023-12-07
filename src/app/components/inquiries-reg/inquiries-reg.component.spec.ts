import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesRegComponent } from './inquiries-reg.component';

describe('InquiriesRegComponent', () => {
  let component: InquiriesRegComponent;
  let fixture: ComponentFixture<InquiriesRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiriesRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquiriesRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
