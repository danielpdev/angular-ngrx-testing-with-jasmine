import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { loadData, refreshItems, loadDataSuccess } from './actions';
import { Item } from './item';

export interface State {
  items: Item[];
}

export const initialState: State = {
  items: null
};

export const reducer = createReducer(
  initialState,
  on(loadData, (state, { items }) => {
    return { ...state, items };
  }),
  on(refreshItems, (state, { items }) => {
    return { ...state, items };
  }),
  on(loadDataSuccess, (state, { items }) => {
    return { ...state, items };
  })
);

export const selectItemsState = createFeatureSelector<State>('items');
export const selectFeatureItems = createSelector(selectItemsState, state => state.items);
