import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketClientComponent } from './ticket-client.component';

describe('TicketClientComponent', () => {
  let component: TicketClientComponent;
  let fixture: ComponentFixture<TicketClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
