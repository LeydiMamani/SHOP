import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaMComponent } from './ropa-m.component';

describe('RopaMComponent', () => {
  let component: RopaMComponent;
  let fixture: ComponentFixture<RopaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
