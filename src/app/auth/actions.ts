import { props, createAction } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: any }>()
);

export const logoutSuccess = createAction(
  '[Auth/API] Logout Success',
  props<{ user: any }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');