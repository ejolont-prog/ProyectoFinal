import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetallepesajeComponent } from './verdetallepesaje.component';

describe('VerdetallepesajeComponent', () => {
  let component: VerdetallepesajeComponent;
  let fixture: ComponentFixture<VerdetallepesajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdetallepesajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdetallepesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
