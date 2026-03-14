import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpesajeComponent } from './crearpesaje.component';

describe('CrearpesajeComponent', () => {
  let component: CrearpesajeComponent;
  let fixture: ComponentFixture<CrearpesajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearpesajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
