import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarVehiculoComponent } from './gestionar-vehiculo.component';

describe('GestionarVehiculoComponent', () => {
  let component: GestionarVehiculoComponent;
  let fixture: ComponentFixture<GestionarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
