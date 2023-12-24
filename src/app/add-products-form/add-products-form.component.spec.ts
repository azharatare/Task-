import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsFormComponent } from './add-products-form.component';

describe('AddProductsFormComponent', () => {
  let component: AddProductsFormComponent;
  let fixture: ComponentFixture<AddProductsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
