import { Action, createReducer, on } from '@ngrx/store';
import {
  signUpFailureAction,
  signUpSuccessAction,
} from '../actions/sign-up.actions';
import { User } from '../models/user.model';

export const userFeatureKey = 'User';

export interface SignUpState {
  users: User[];
  error: string;
}

export const initialState: SignUpState = {
  users: [],
  error: '',
};

export const signUpReducer = createReducer(
  initialState,

  on(signUpSuccessAction, (state: SignUpState, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(signUpFailureAction, (state, { error }) => ({
    ...state,
    ...{
      error: error,
    },
  }))
);

export function reducer(state: SignUpState | undefined, action: Action): any {
  return signUpReducer(state, action);
}
