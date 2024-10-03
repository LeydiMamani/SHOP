import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosMComponent } from './accesorios-m.component';

describe('AccesoriosMComponent', () => {
  let component: AccesoriosMComponent;
  let fixture: ComponentFixture<AccesoriosMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoriosMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoriosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
