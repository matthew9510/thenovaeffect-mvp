import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileExperienceComponent } from './mobile-experience.component';

describe('MobileExperienceComponent', () => {
  let component: MobileExperienceComponent;
  let fixture: ComponentFixture<MobileExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
