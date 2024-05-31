import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeatailsComponent } from './userdeatails.component';

describe('UserdeatailsComponent', () => {
  let component: UserdeatailsComponent;
  let fixture: ComponentFixture<UserdeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdeatailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserdeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
