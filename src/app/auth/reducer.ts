import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logoutSuccess } from './actions';
import { User } from './user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(logoutSuccess, () => initialState)
);

export const selectAuthState = createFeatureSelector<State>('auth');

export const getUser = createSelector(selectAuthState, state => { 
  console.log(555, state);
 return state.user
});
export const getLoggedIn = createSelector(getUser, user => !!user);
