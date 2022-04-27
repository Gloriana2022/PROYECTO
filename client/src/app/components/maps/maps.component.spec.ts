import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponent } from './maps.component';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MapsComponent);
    const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it(`should have as title 'google-maps'`, () => {
    const fixture = TestBed.createComponent(MapsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('google-maps');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MapsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('google-maps app is running!');
  });
});
