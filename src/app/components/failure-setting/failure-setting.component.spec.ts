import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSettingComponent } from './failure-setting.component';

describe('FailureSettingComponent', () => {
  let component: FailureSettingComponent;
  let fixture: ComponentFixture<FailureSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailureSettingComponent]
    });
    fixture = TestBed.createComponent(FailureSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
