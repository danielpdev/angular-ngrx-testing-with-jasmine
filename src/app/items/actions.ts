import { props, createAction } from '@ngrx/store';

export const loadData = createAction(
  '[DataActions] Load Data',
  props<{ items: []}>()
);

export const refreshItems = createAction(
  '[DataActions] Refresh Items',
  props<{ items: []}>()
);

export const refreshData = createAction(
  '[DataActions] Refresh Data',
  props<{ items: []}>()
);

export const loadDataSuccess = createAction(
  '[DataActions] loadDataSuccess',
  props<{ items: number[]}>()
);