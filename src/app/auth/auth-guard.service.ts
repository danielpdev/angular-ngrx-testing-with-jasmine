import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { loginRedirect } from './actions';
import * as fromAuth from './reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(loginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
