import { createReducer, on } from '@ngrx/store';
import * as loginActions from '../actions/login.action';

export interface AuthState {
  user: any;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginActions.logInSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(loginActions.logInFailure, (state, { error }) => ({ ...state, user: null, error }))
);
