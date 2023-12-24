import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as formProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<formProduct.ProductState>(
  formProduct.productFeatureKey,
);

export const selectProducts = createSelector(
  selectProductState,
  (state: formProduct.ProductState) => state.products
);

