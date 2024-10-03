import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetasMComponent } from './chaquetas-m.component';

describe('ChaquetasMComponent', () => {
  let component: ChaquetasMComponent;
  let fixture: ComponentFixture<ChaquetasMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetasMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
