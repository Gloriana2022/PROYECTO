import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarChoferComponent } from './gestionar-chofer.component';

describe('GestionarChoferComponent', () => {
  let component: GestionarChoferComponent;
  let fixture: ComponentFixture<GestionarChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
