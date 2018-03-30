import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistSignUpComponent } from './therapist-sign-up.component';

describe('TherapistSignUpComponent', () => {
  let component: TherapistSignUpComponent;
  let fixture: ComponentFixture<TherapistSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
