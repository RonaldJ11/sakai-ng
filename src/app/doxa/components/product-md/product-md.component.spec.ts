import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMdComponent } from './product-md.component';

describe('ProductMdComponent', () => {
  let component: ProductMdComponent;
  let fixture: ComponentFixture<ProductMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
