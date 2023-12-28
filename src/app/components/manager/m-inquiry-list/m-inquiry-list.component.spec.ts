import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MInquiryListComponent } from './m-inquiry-list.component';

describe('MInquiryListComponent', () => {
  let component: MInquiryListComponent;
  let fixture: ComponentFixture<MInquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MInquiryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MInquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
