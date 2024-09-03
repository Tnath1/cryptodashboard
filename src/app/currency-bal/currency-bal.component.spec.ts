import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBalComponent } from './currency-bal.component';

describe('CurrencyBalComponent', () => {
  let component: CurrencyBalComponent;
  let fixture: ComponentFixture<CurrencyBalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyBalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
