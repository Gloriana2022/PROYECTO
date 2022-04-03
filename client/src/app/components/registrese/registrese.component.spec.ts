import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreseComponent } from './registrese.component';

describe('RegistreseComponent', () => {
  let component: RegistreseComponent;
  let fixture: ComponentFixture<RegistreseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
