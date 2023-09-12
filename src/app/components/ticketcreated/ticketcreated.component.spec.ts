import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcreatedComponent } from './ticketcreated.component';

describe('TicketcreatedComponent', () => {
  let component: TicketcreatedComponent;
  let fixture: ComponentFixture<TicketcreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
