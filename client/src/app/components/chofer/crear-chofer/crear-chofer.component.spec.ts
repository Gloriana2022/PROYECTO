import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearChoferComponent } from './crear-chofer.component';

describe('CrearChoferComponent', () => {
  let component: CrearChoferComponent;
  let fixture: ComponentFixture<CrearChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
