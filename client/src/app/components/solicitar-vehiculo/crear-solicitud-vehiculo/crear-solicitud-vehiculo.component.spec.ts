import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudVehiculoComponent } from './crear-solicitud-vehiculo.component';

describe('CrearSolicitudVehiculoComponent', () => {
  let component: CrearSolicitudVehiculoComponent;
  let fixture: ComponentFixture<CrearSolicitudVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
