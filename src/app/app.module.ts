import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ItemsComponent } from './items/items.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './root-reducer';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  StoreModule.forRoot(reducers),
 ],
  declarations: [ AppComponent, HelloComponent, ItemsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule { }
