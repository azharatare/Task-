// src/app/state/product.reducer.ts

import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/products.action';
import { Product } from '../models/products.model';

export const productFeatureKey = 'Product';

export interface ProductState {
    products: Product[];
}

export const initialState: ProductState = {
    products: []
};

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({
        ...state,
        products: products,
    })),
    on(ProductActions.addProduct, (state, { product }) => ({
        ...state,
        products: [...state.products, product],
    }))
);

export function productsReducer(state: ProductState | undefined, action: Action): any {
    return productReducer(state, action);
  }