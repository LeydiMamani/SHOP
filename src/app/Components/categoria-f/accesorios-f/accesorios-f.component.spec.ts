import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosFComponent } from './accesorios-f.component';

describe('AccesoriosFComponent', () => {
  let component: AccesoriosFComponent;
  let fixture: ComponentFixture<AccesoriosFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoriosFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriosFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
