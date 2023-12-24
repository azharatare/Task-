import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/products.model';
import { Store, select } from '@ngrx/store';
import { loadProducts } from '../shared/actions/products.action';
import { Observable } from 'rxjs';
import { ProductState } from '../shared/reducers/product.reducer';
import { selectProducts } from '../shared/Selectors/product.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products-form',
  templateUrl: './add-products-form.component.html',
  styleUrls: ['./add-products-form.component.scss']
})
export class AddProductsFormComponent implements OnInit {
  public addProductForm!: FormGroup;
  products$!: Observable<Product[]>;
  public product!: Product
  lastItemId!: number

  constructor(private productService: ProductService, private store: Store<ProductState>,
    private router: Router) {
    this.products$ = this.store.pipe(select(selectProducts));
   }

  ngOnInit(): void {
    this.addProductForm = this.productService.createForm();
    this.store.dispatch(loadProducts());
    this.products$.pipe().subscribe(item => {
        if (item.length > 0) {
        this.lastItemId = item[item.length - 1].id
        }
      })
  }

  public addProduct() {
    if (!this.addProductForm.invalid) {
      this.productService.addProduct(this.getFormValue());
      this.router.navigate(['/products']);
    }
  }

  public getFormValue() : Product{
    const formValue = this.addProductForm.getRawValue();
    const product: Product = {
      id: this.lastItemId + 1,
      name: formValue.name,
      data: {
      ['CPU model']:  formValue.cpyModel,
      ['Case Size']: formValue.caseSize,
      Description:formValue.description,
      ['Hard disk size']: formValue.hardDiskSize,
      ['Screen size']: formValue.screenSize,
      ['Strap Colour']: formValue.strapColor,
      capacity : formValue.capacity,
      ['capacity GB']: formValue.capacityGB,
      color: formValue.color,
      price: formValue.price,
      year :formValue.year,
      Generation: formValue.generation
      }
    };
    return product;}
}
