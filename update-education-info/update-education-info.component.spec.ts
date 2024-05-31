import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducationInfoComponent } from './update-education-info.component';

describe('UpdateEducationInfoComponent', () => {
  let component: UpdateEducationInfoComponent;
  let fixture: ComponentFixture<UpdateEducationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEducationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
