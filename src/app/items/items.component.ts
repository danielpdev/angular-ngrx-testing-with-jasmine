    import { Component, OnInit } from '@angular/core';
    import { Store, select } from '@ngrx/store';
    import * as fromFeature from './reducer';
    import * as DataActions from './actions';
     
    @Component({
      selector: 'items',
      template: `
        <div *ngFor="let item of items$ | async">{{ item }}</div>
     
        <button (click)="onRefresh()">Refresh Items</button>
      `,
    })
    export class ItemsComponent implements OnInit {
      items$: any;
     
      constructor(private store: Store<fromFeature.State>) {
         this.items$ = this.store.pipe(select(fromFeature.selectFeatureItems));
      }
     
      ngOnInit() {
        this.store.dispatch(DataActions.loadData({items: []}));
      }
     
      onRefresh() {
        this.store.dispatch(DataActions.refreshItems({items: [] }));
      }
    }