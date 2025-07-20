import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHolder } from './product-holder';

describe('ProductHolder', () => {
  let component: ProductHolder;
  let fixture: ComponentFixture<ProductHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
