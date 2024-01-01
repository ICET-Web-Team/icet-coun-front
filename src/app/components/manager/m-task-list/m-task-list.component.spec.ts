import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTaskListComponent } from './m-task-list.component';

describe('MTaskListComponent', () => {
  let component: MTaskListComponent;
  let fixture: ComponentFixture<MTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MTaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
