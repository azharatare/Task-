// src/app/state/product.actions.ts

import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products.model';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ products: Product[] }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

