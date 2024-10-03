import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasFComponent } from './camisetas-f.component';

describe('CamisetasFComponent', () => {
  let component: CamisetasFComponent;
  let fixture: ComponentFixture<CamisetasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisetasFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
