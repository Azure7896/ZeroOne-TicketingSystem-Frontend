import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsWindowComponent } from './user-settings-window.component';

describe('UserSettingsComponent', () => {
  let component: UserSettingsWindowComponent;
  let fixture: ComponentFixture<UserSettingsWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettingsWindowComponent]
    });
    fixture = TestBed.createComponent(UserSettingsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
