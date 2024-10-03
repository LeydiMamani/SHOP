import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonesMComponent } from './pantalones-m.component';

describe('PantalonesMComponent', () => {
  let component: PantalonesMComponent;
  let fixture: ComponentFixture<PantalonesMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantalonesMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantalonesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
