import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonesFComponent } from './pantalones-f.component';

describe('PantalonesFComponent', () => {
  let component: PantalonesFComponent;
  let fixture: ComponentFixture<PantalonesFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantalonesFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantalonesFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
