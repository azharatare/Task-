import { combineReducers } from '@ngrx/store';
import { reducer } from './sign-up.reducer';
import { productsReducer } from './product.reducer';

export const rootReducer = combineReducers({
    reducer,
    productsReducer
});