import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailuresSettingsComponent } from './failures-settings.component';

describe('FailureSettingComponent', () => {
  let component: FailuresSettingsComponent;
  let fixture: ComponentFixture<FailuresSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailuresSettingsComponent]
    });
    fixture = TestBed.createComponent(FailuresSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
