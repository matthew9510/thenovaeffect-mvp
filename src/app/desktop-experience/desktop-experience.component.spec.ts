import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopExperienceComponent } from './desktop-experience.component';

describe('DesktopExperienceComponent', () => {
  let component: DesktopExperienceComponent;
  let fixture: ComponentFixture<DesktopExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
