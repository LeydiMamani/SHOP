import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasMComponent } from './camisetas-m.component';

describe('CamisetasMComponent', () => {
  let component: CamisetasMComponent;
  let fixture: ComponentFixture<CamisetasMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisetasMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
