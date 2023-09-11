import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketWindowTextEditorComponent } from './ticket-window-text-editor.component';

describe('TicketWindowTextEditorComponent', () => {
  let component: TicketWindowTextEditorComponent;
  let fixture: ComponentFixture<TicketWindowTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketWindowTextEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketWindowTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
