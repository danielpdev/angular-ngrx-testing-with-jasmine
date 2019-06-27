import { ActionReducerMap } from '@ngrx/store';
import { reducer as itemsReducer } from './items/reducer';
import { reducer as authReducer } from './auth/reducer';
export interface State {
}
export const reducers: ActionReducerMap<State, any /* put any here */> = {
  items: itemsReducer,
  auth: authReducer
};