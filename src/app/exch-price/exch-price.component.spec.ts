import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchPriceComponent } from './exch-price.component';

describe('ExchPriceComponent', () => {
  let component: ExchPriceComponent;
  let fixture: ComponentFixture<ExchPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
