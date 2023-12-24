// src/app/state/product.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import * as ProductActions from '../actions/products.action';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() => this.productService.getProducts()),
      map((products) => ProductActions.loadProductsSuccess({ products }))
    )
  );



    constructor(private actions$: Actions, private productService: ProductService) { }
}
