import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorRegComponent } from './counsellor-reg.component';

describe('CounsellorRegComponent', () => {
  let component: CounsellorRegComponent;
  let fixture: ComponentFixture<CounsellorRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounsellorRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounsellorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
