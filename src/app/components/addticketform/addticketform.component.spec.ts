import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddticketformComponent} from './addticketform.component';

describe('AddticketformComponent', () => {
  let component: AddticketformComponent;
  let fixture: ComponentFixture<AddticketformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddticketformComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddticketformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
