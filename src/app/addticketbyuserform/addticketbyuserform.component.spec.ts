import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddticketbyuserformComponent } from './addticketbyuserform.component';

describe('AddticketbyuserformComponent', () => {
  let component: AddticketbyuserformComponent;
  let fixture: ComponentFixture<AddticketbyuserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddticketbyuserformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddticketbyuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
