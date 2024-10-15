import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFComponent } from './general-f.component';

describe('GeneralFComponent', () => {
  let component: GeneralFComponent;
  let fixture: ComponentFixture<GeneralFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
