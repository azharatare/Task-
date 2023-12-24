import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as formUser from '../reducers/sign-up.reducer';

export const selectUserState = createFeatureSelector<formUser.SignUpState>(
    formUser.userFeatureKey,
);

export const selectUsers = createSelector(
    selectUserState,
  (state: formUser.SignUpState) => state.users
);

