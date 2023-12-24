import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/products.model';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../shared/reducers/product.reducer';
import { selectProducts } from '../shared/Selectors/product.selectors';
import { loadProducts } from '../shared/actions/products.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit
{
  nullTemplate!: null;
  products$: Observable<Product[]>;

  constructor(private store: Store<ProductState>) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

}
