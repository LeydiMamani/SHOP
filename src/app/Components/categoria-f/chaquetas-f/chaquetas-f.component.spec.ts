import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetasFComponent } from './chaquetas-f.component';

describe('ChaquetasFComponent', () => {
  let component: ChaquetasFComponent;
  let fixture: ComponentFixture<ChaquetasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetasFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
