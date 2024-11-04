import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportProductsComponent } from './sport-products.component';

describe('SportProductsComponent', () => {
  let component: SportProductsComponent;
  let fixture: ComponentFixture<SportProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
