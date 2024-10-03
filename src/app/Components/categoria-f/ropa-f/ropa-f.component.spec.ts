import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaFComponent } from './ropa-f.component';

describe('RopaFComponent', () => {
  let component: RopaFComponent;
  let fixture: ComponentFixture<RopaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
