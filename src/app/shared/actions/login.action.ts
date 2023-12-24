import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const logIn = createAction(
  '[login] Sign In',
  props<{ email: string, password: string }>()
);

export const logInSuccess = createAction(
  '[login] login Success',
  props<{ user: User[] }>()
);

export const logInFailure = createAction(
  '[login] login Failure',
  props<{ error: any }>()
);
