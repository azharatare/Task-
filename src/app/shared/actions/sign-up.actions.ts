
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const signUpAction = createAction(
  '[Sign Up] Sign_Up',
  props<{ email: string, password: string }>()
);

export const signUpSuccessAction = createAction(
  '[Sign Up] Sign_Up _Success',
  props<{ user: User }>()
);

export const signUpFailureAction = createAction(
  '[Sign Up] Sign_U_Failure',
  props<{ error: any }>()
);

