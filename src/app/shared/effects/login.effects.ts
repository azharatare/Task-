import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as loginActions from '../actions/login.action';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.logIn),
      switchMap(action =>
        this.userService.getUser(action.email, action.password).pipe(
          map((user) => {
            if (user.length > 0) {
              this.router.navigate(['/products']);
              return loginActions.logInSuccess({ user });
            } else {
              return loginActions.logInFailure({ error: 'Invalid username or password' });
            }
          }),
          catchError(error => {
            return of(loginActions.logInFailure({ error }));
          })
        )
      )
    )
  );

  logInFailure$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginActions.logInFailure),
        map(action => {
          alert(action.error);
        })),
        { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router) { }
}
