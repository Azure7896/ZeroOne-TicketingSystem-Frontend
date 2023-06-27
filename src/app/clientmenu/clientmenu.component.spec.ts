import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmenuComponent } from './clientmenu.component';

describe('ClientmenuComponent', () => {
  let component: ClientmenuComponent;
  let fixture: ComponentFixture<ClientmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
