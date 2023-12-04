import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpecificTicketWindowComponent} from './specific-ticket-window.component';

describe('TicketWindowComponent', () => {
  let component: SpecificTicketWindowComponent;
  let fixture: ComponentFixture<SpecificTicketWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecificTicketWindowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpecificTicketWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
