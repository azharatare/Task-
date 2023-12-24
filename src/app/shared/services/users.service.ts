import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { signUpAction } from '../actions/sign-up.actions';
import { logIn } from '../actions/login.action';
import { selectUsers } from '../Selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private readonly store: Store) {}

  public AddUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  public getUser(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  public get users$() {
    return this.store.pipe(select(selectUsers));
  }

  public signUp(email: string, password: string): void {
    this.store.dispatch(signUpAction({ email: email, password: password }));
  }

  public login(email: string, password: string): void {
    this.store.dispatch(logIn({ email: email, password: password }));
  }
}
