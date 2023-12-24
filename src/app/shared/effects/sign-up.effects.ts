
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    signUpAction,
    signUpFailureAction,
    signUpSuccessAction,
  } from '../actions/sign-up.actions'; 
import { UserService } from '../services/users.service';

@Injectable()
export class SignUpEffects {  
  
  
  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(signUpAction),
    mergeMap((action) => this.userService.AddUser({email: action.email, password: action.password})
      .pipe(
        map(user => 
          signUpSuccessAction({  user }),
          alert('Sign Up Sucseefully')
        ),
        catchError(error => of(signUpFailureAction({ error })))
      )
    )
  )); 


  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
