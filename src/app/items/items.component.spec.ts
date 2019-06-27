    import { ComponentFixture, TestBed } from '@angular/core/testing';
    import { StoreModule, Store, combineReducers } from '@ngrx/store';
    import { ItemsComponent } from './items.component';
    import * as fromFeature from './../root-reducer';
    import * as DataActions from './actions';
    import { provideMockStore, MockStore } from '@ngrx/store/testing';
     
    describe('My Component', () => {
      let component: ItemsComponent;
      let fixture: ComponentFixture<ItemsComponent>
      let store: Store<fromFeature.State>
     
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            StoreModule.forRoot(fromFeature.reducers),
          ],
          declarations: [
            ItemsComponent,
          ],
        });
     
        store = TestBed.get(Store);
     
        spyOn(store, 'dispatch').and.callThrough();
     
        fixture = TestBed.createComponent(ItemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
     
      it('should be created', () => {
        expect(component).toBeTruthy();
      });
     
      it('should dispatch an action to load data when created', () => {
        const action = DataActions.loadData({items: []});
     
        expect(store.dispatch).toHaveBeenCalledWith(action);
      });
     
      it('should dispatch an action to refreshing data', () => {
        const action = DataActions.refreshItems({items: []});
        const action2 = DataActions.loadData({items: []});
     
        component.onRefresh();
     
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(jasmine.objectContaining({
          type: '[DataActions] Load Data'
        }));
        expect(store.dispatch).toHaveBeenCalledWith(jasmine.objectContaining({
          type: '[DataActions] Refresh Items'
        }));
      });
     
      it('should display a list of items after the data is loaded', () => {
        const items: number[] = [1, 2, 3];
        const action = DataActions.loadDataSuccess({ items });
     
        store.dispatch(action);
     
        component.items$.subscribe(data => {
          expect(data.length).toBe(items.length);
        });
      });
    });